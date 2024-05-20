import React, { createContext, useEffect, useState } from "react"

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "~/navigation/props";

/* COMPONENTS */
import { Alert } from "react-native";

/* FIREBASE */
import { auth, firestore } from "utils/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";


export const UserContext = createContext({
    uid: "",
    name: "",
    /** 
     * `function` that modifies the user `name` 
     * @param value The new name which will replace the old one
     * */
    setName: (value: string) => { },

    email: "",
    /** 
     * `function` that modifies the user `email` 
     * @param value The new email which will replace the old one
     * */
    setEmail: (value: string) => { },

    password: "",
    /** 
     * `function` that modifies the user `password` 
     * @param value The new password which will replace the old one
     * */
    setPassword: (value: string) => { },

    crn: "",
    /** 
     * `function` that modifies the user `crn` 
     * @param value The new crn which will replace the old one
     * */
    setCrn: (value: string) => { },

    /** 
     * Asynchronous `Promise<void>` `function` that handles the user sign up request
     * @param name User name
     * @param email User email (must be a valid email address)
     * @param password User password (must be longer than 8 `char`)
     * @param crn User CRN (must follow the format xx-xxx-xxx/xxxx-xx)
     * */
    handleSignup: (name: string, email: string, password: string, crn: string) => { },

    /** 
     * Asynchronous `Promise<void>` `function` that handles the user login request
     * @param email Registered user email
     * @param password Registered user password
     * */
    handleLogin: (email: string, password: string) => { },

    /** 
     * Asynchronous `Promise<void>` `function` that handles the forgot password request
     * @param email The user email address for sending the password change email
     *  */
    handleForgotPassword: (email: string, setEmail: (value: string) => void) => { },

    /**
     * Asynchronous `Promise<void>` `function` that handles the sign out request.
     * 
     * *After signing out, user data will be wiped clean*
     */
    handleLogout: () => { },

    /**
     * `void` `function` that handles the collection and updating of user data
     */
    handleUserDataCollection: () => { },
});


export default function UserProvider({ children }: { children: any }) {
    const navigation = useNavigation<AppNavigationProps>();

    const [uid, setUid] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [crn, setCrn] = useState('');

    const UsuariosDoc = (uid: string) => doc(firestore, 'usuarios', uid);

    const handleSignup = async (name: string, email: string, password: string, crn: string) => {


        // TODO: Validation
        // const isEveryInputFilled = name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && crn.trim() !== '';

        // const isNameValid = '';
        // const isCrnValid = await fetch(`https://receitaws.com.br/v1/cnpj/${crn}`)
        //     .then(response => response.json())
        //     .then(value => value.status === 'OK')
        //     .catch(error => console.log(error));

        // if (!isEveryInputFilled) return Alert.alert('Erro!', 'Favor preencher todos os campos antes de enviar');
        // if (!isCrnValid) return Alert.alert('CNPJ Inválido', 'O Cnpj enviado não existe');

        await createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => setDoc(UsuariosDoc(cred.user.uid), { name: name, email: email, crn: crn, password: password }))
            .then(() => {
                Alert.alert('Cadastrado com sucesso!', 'Realize login para entrar na sua conta')
                navigation.navigate('LoginScreen');
            })
            .catch((error) => {
                console.log(`Email: ${email} Password: ${password}`);
                console.log('Erro ao cadastrar usuario: ' + error);
                Alert.alert(
                    'Erro no envio!',
                    `Ocorreu um erro ao tentar criar sua conta.\n\nTente novamente mais tarde, ou entre em contato com omcorp.helpcenter@gmail.com`
                );
            });

        setName('');
        setEmail('');
        setPassword('');
        setCrn('');
    }


    const handleLogin = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(
                // Success
                () => {
                    navigation.navigate('App');
                },
                // Failure
                (reason) => {
                    Alert.alert('Erro no login!', reason)
                    setEmail('');
                    setPassword('');
                }
            )
            .catch(error => {
                console.log('Erro ao tentar entrar na conta: ' + error);
                Alert.alert('Ooops', 'Ocorreu um erro ao tentar entrar em sua conta\nFavor validar se seus dados estão corretos');
                setEmail('');
                setPassword('');
            })
    }


    const handleForgotPassword = async (email: string, setEmail: (value: string) => void) => {

        await sendPasswordResetEmail(auth, email)
            .then(
                // Success
                () => {
                    Alert.alert('Email de confirmação', 'Um email de confirmação foi enviado a ' + email)
                },
                // Failure
                (reason) => {
                    Alert.alert('Erro no envio!', reason);
                })

            .catch(error => {
                console.log("Erro ao tentar processar request de forgotpassword: " + error)

                Alert.alert('Erro no envio!', 'Alguma coisa deu errado...')
            });
    }


    const handleLogout = async () => {
        await signOut(auth);

        navigation.navigate('InitialScreen');

        setName('');
        setEmail('');
        setPassword('');
        setCrn('');
    }


    const handleDataCollection = () => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const docRef = doc(firestore, 'usuarios', currentUser.uid);
                const docData = getDoc(docRef);
                docData.then(doc => {
                    const userData = doc.data();
                    if (userData) {
                        setName(userData.name)
                        setEmail(userData.email)
                        setPassword(userData.password)
                        setCrn(userData.crn)
                    }
                })
            }
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            } else {
                setUid('');
            }
        })

        return () => unsubscribe();
    }, [])



    return (
        <UserContext.Provider value={{
            uid, name, email, password, crn,
            setName: (value) => setName(value),
            setEmail: (value) => setEmail(value),
            setPassword: (value) => setPassword(value),
            setCrn: (value) => setCrn(value),
            handleSignup: (name, email, password, crn) => handleSignup(name, email, password, crn),
            handleLogin: (email, password) => handleLogin(email, password),
            handleForgotPassword: (email: string, setEmail: (value: string) => void) => handleForgotPassword(email, setEmail),
            handleLogout: () => handleLogout(),
            handleUserDataCollection: () => handleDataCollection(),
        }}>
            {children}
        </UserContext.Provider>
    )
}