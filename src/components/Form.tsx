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
export type InputListProps = {
    inputList: {
        id: number;
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
export type ButtonListProps = {
    buttonList: {
        id: number;
        title: string;
        onPress: any;
    }[];
}


/**
 * @param inputList List of inputs that the user will be required to fill
 * @returns A list of `Input` or `SecureInput` components that use the `inputList` data
 */
export function InputList({ inputList }: InputListProps) {
    return (
        <View style={styles.inputList}>
            {
                inputList.map((item) => {
                    return !item.isSecured ? (
                        <Input
                            key={item.id}
                            label={item.label}
                            placeholder={item.placeholder}
                            value={item.value}
                            setValue={item.setValue}
                        />
                    ) : (
                        <SecureInput
                            key={item.id}
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
export function ButtonList({ buttonList }: ButtonListProps) {
    return (
        <>
            {
                buttonList.map((item) => (
                    <Button
                        key={item.id}
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
export function Form({ inputList, buttonList }: InputListProps & ButtonListProps) {
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