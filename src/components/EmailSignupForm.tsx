import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Eye, EyeOff, Check } from 'lucide-react-native';

const EmailSignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            <Text style={styles.headerTitle}>Sign up</Text>

            <View style={styles.loginPrompt}>
                <Text style={styles.alreadyAccountText}>Already have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.signInLink}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                    </TouchableOpacity>
                </View>

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirm Password"
                        placeholderTextColor="#999"
                        secureTextEntry={!showConfirmPassword}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setAgree(!agree)}
                >
                    <View style={[styles.checkbox, agree && styles.checkboxChecked]}>
                        {agree && <Check size={16} color="#FFF" strokeWidth={3} />}
                    </View>
                    <Text style={styles.checkboxLabel}>I agree to terms & conditions</Text>
                </TouchableOpacity>

                <Text style={styles.disclaimerText}>
                    By continuing, I agree to SolarKoala's <Text style={styles.linkText}>Terms of Service</Text>.
                    I also consent to the use of my app usage data to improve SolarKoala and the relevancy
                    of advertising campaigns for the app. Team CS-73 will never use your journal entries:
                    only you can read them. See our <Text style={styles.linkText}>Privacy Policy</Text> for more information.
                </Text>

                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 40,
    },
    headerTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#0D1B2A',
        marginBottom: 10,
    },
    loginPrompt: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    alreadyAccountText: {
        fontSize: 16,
        color: '#666',
    },
    signInLink: {
        fontSize: 16,
        color: '#269396',
        fontWeight: 'bold',
    },
    form: {
        width: '100%',
    },
    input: {
        backgroundColor: '#FFF',
        height: 60,
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 60,
        borderRadius: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 25,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#269396',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#269396',
    },
    checkboxLabel: {
        fontSize: 16,
        color: '#0D1B2A',
        fontWeight: '500',
    },
    disclaimerText: {
        fontSize: 12,
        color: '#666',
        lineHeight: 18,
        textAlign: 'left',
        marginBottom: 40,
    },
    linkText: {
        color: '#269396',
        fontWeight: '600',
    },
    continueButton: {
        backgroundColor: '#269396',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#269396',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    continueButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EmailSignupForm;