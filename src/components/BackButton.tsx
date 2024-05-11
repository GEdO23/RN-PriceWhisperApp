import { Feather } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export function BackButton({ onPress }: { onPress: () => void }) {
    return (
        <View style={styles.backButton}>
            <Feather name="chevron-left" size={16} color="#007AFF" onPress={onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        paddingLeft: 20,
    }
});