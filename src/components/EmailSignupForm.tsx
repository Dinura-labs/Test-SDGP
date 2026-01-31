import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Eye, EyeOff, Check } from 'lucide-react-native';

const EmailSignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 w-full bg-[#F8FBFF]"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingBottom: 40 }}
                className="w-full pt-6"
            >
                {/* Header Section */}
                <View className="mb-8">
                    <Text className="text-[36px] font-bold text-[#0D1B2A] mb-1">Sign up</Text>
                    <View className="flex-row items-center">
                        <Text className="text-[15px] text-[#666]">Already have an account? </Text>
                        <TouchableOpacity>
                            <Text className="text-[15px] text-[#269396] font-bold">Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Form Inputs Section */}
                <View className="w-full">
                    {/* Email Input */}
                    <TextInput
                        className="bg-white h-[60px] rounded-2xl px-5 text-[15px] mb-4 border border-[#EFF0F6] shadow-sm text-[#0D1B2A]"
                        placeholder="Email Address"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    {/* Password Input */}
                    <View className="flex-row items-center bg-white h-[60px] rounded-2xl px-5 mb-4 border border-[#EFF0F6] shadow-sm">
                        <TextInput
                            className="flex-1 text-[15px] text-[#0D1B2A]"
                            placeholder="Password"
                            placeholderTextColor="#9CA3AF"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-2">
                            {showPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                        </TouchableOpacity>
                    </View>

                    {/* Confirm Password Input */}
                    <View className="flex-row items-center bg-white h-[60px] rounded-2xl px-5 mb-6 border border-[#EFF0F6] shadow-sm">
                        <TextInput
                            className="flex-1 text-[15px] text-[#0D1B2A]"
                            placeholder="Confirm Password"
                            placeholderTextColor="#9CA3AF"
                            secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} className="p-2">
                            {showConfirmPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                        </TouchableOpacity>
                    </View>

                    {/* Checkbox Section */}
                    <TouchableOpacity
                        className="flex-row items-center mb-6"
                        activeOpacity={0.7}
                        onPress={() => setAgree(!agree)}
                    >
                        <View className={`w-[22px] h-[22px] rounded-md border-2 border-[#269396] mr-3 justify-center items-center ${agree ? 'bg-[#269396]' : ''}`}>
                            {agree && <Check size={14} color="#FFF" strokeWidth={3} />}
                        </View>
                        <Text className="text-[15px] text-[#0D1B2A] font-medium">I agree to terms & conditions</Text>
                    </TouchableOpacity>

                    {/* Disclaimer Text */}
                    <Text className="text-[12px] text-[#718096] leading-[20px] mb-8 text-left">
                        By continuing, I agree to SolarKoala's <Text className="text-[#269396] font-semibold">Terms of Service</Text>.
                        I also consent to the use of my app usage data to improve SolarKoala. Team CS-73 will never use your journal entries.
                        See our <Text className="text-[#269396] font-semibold">Privacy Policy</Text> for more information.
                    </Text>

                    {/* Continue Button */}
                    <TouchableOpacity 
                        className="bg-[#269396] h-[60px] rounded-[16px] justify-center items-center shadow-sm active:opacity-90"
                        style={{ shadowColor: '#269396', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 }}
                    >
                        <Text className="text-white text-[17px] font-bold">Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default EmailSignupForm;