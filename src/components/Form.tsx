import { Text, View, StyleSheet } from 'react-native'
import { Input, SecureInput } from './Input'
import { Button } from './Button';

type InputListAtributes = {
    inputList: {
        label: string;
        placeholder: string;
        value: any;
        setValue: any;
        isSecured: boolean;
    }[];
}

type ButtonListAtributes = {
    buttonList: {
        title: string;
        onPress: any;
    }[];
}

const InputList = ({ inputList }: InputListAtributes) => {
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

const ButtonList = ({ buttonList }: ButtonListAtributes) => {
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

const Form = ({ inputList, buttonList }: InputListAtributes & ButtonListAtributes) => {
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

export { Form, InputListAtributes, ButtonListAtributes }
