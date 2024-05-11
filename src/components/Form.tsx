import { Text, View, StyleSheet } from 'react-native'
import { Input, SecureInput } from './Input'
import { Button } from './Button';


/**
 * Type of input list props
 * 
 * @param inputList Array of objects which contain a `label` string, `placeholder` string, `React.useState` `value` and `setValue` and an `isSecured` boolean
 * 
 * if `isSecured` equals true, then it will generate a generic `SecureInput`, else it generates a generic `Input`
 * 
 * @example
 * const inputList = [
 *      {
 *          label: 'Username',
 *          placeholder: 'Tell me your username',
 *          value: username,
 *          setValue: setUsername,
 *          isSecured: false
 *      },
 *      {
 *          label: 'Password',
 *          placeholder: 'Please input a password',
 *          value: password,
 *          setValue: setPassword,
 *          isSecured: true
 *      }
 * ]
 */
type InputListProps = {
    inputList: {
        label: string;
        placeholder: string;
        value: any;
        setValue: any;
        isSecured: boolean;
    }[];
}


/**
 * Type of button list atributes
 * 
 * @param buttonList Array of objects which contain a `title` string and a `onPress` function
 * @example
 * const buttonList = [
 *      {
 *          title: 'Example title',
 *          onPress: doSomething
 *      },
 *      {
 *          title: 'Another example title',
 *          onPress: doSomethingElse
 *      }
 * ]
 */
type ButtonListProps = {
    buttonList: {
        title: string;
        onPress: any;
    }[];
}


/**
 * @param inputList List of inputs that the user will be required to fill
 * @returns A list of `Input` or `SecureInput` components that use the `inputList` data
 */
const InputList = ({ inputList }: InputListProps) => {
    return (
        <View style={styles.inputList}>
            {
                inputList.map((item) => {
                    return !item.isSecured ? (
                        <Input
                            label={item.label}
                            placeholder={item.placeholder}
                            value={item.value}
                            setValue={item.setValue}
                        />
                    ) : (
                        <SecureInput
                            label={item.label}
                            placeholder={item.placeholder}
                            value={item.value}
                            setValue={item.setValue}
                        />
                    )
                })
            }
        </View>
    )
}


/**
 * @param buttonList List of available buttons that the user may press
 * @returns A list of `Button` components that use the `buttonList` data
 */
const ButtonList = ({ buttonList }: ButtonListProps) => {
    return (
        <>
            {
                buttonList.map((item) => (
                    <Button
                        title={item.title}
                        onPress={item.onPress}
                    />
                ))
            }
        </>
    )
}


/**
 * Generic form component
 * @param inputList List of inputs that the user will be required to fill
 * @param buttonList List of available buttons that the user may press
 * @returns The `Form` component
 */
const Form = ({ inputList, buttonList }: InputListProps & ButtonListProps) => {
    return (
        <View style={styles.form}>
            <InputList inputList={inputList} />
            <ButtonList buttonList={buttonList} />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
    },
    inputList: {
        gap: 20,
        marginBottom: 50,
    }
})

export { Form, InputListProps, ButtonListProps }
