import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { Eye, EyeOff, Check, ArrowLeft, Menu } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

// --- Responsive Helpers ---
const { width, height } = Dimensions.get('window');
const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;

const EmailSignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);

    return (
        <View className="flex-1 bg-white">
            {/* 1. Background Gradient (Matches UI) */}
            <LinearGradient
                colors={['#FFFDF5', '#EDF7FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="absolute w-full h-full"
            />

            <SafeAreaView className="flex-1" style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1 w-full"
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: wp(6), paddingBottom: hp(5) }}
                        className="w-full"
                    >
                        {/* --- Header Row (Back & Menu) --- */}
                        <View className="flex-row justify-between items-center w-full" style={{ marginTop: hp(2), marginBottom: hp(4) }}>
                            <TouchableOpacity>
                                <ArrowLeft color="#1C1C1E" size={28} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Menu color="#1C1C1E" size={28} />
                            </TouchableOpacity>
                        </View>

                        {/* --- Title Section --- */}
                        <View className="w-full" style={{ marginBottom: hp(4) }}>
                            <Text 
                                className="font-bold text-[#0D1B2A]" 
                                style={{ fontSize: wp(9), marginBottom: hp(1) }}
                            >
                                Sign up
                            </Text>
                            <View className="flex-row items-center">
                                <Text className="text-[#666]" style={{ fontSize: wp(4) }}>
                                    Already have an account?{' '}
                                </Text>
                                <TouchableOpacity>
                                    <Text className="font-bold text-[#269396]" style={{ fontSize: wp(4) }}>
                                        Sign in
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* --- Form Inputs --- */}
                        <View className="w-full space-y-4">
                            {/* Email Input */}
                            <TextInput
                                className="bg-white rounded-[16px] px-5 border border-transparent shadow-sm text-[#0D1B2A]"
                                style={{ height: 60, fontSize: wp(4), marginBottom: hp(2) }}
                                placeholder="Email Address"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            {/* Password Input */}
                            <View 
                                className="flex-row items-center bg-white rounded-[16px] px-5 border border-transparent shadow-sm"
                                style={{ height: 60, marginBottom: hp(2) }}
                            >
                                <TextInput
                                    className="flex-1 text-[#0D1B2A]"
                                    style={{ fontSize: wp(4) }}
                                    placeholder="Password"
                                    placeholderTextColor="#9CA3AF"
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-2">
                                    {showPassword ? 
                                        <EyeOff size={22} color="#269396" /> : 
                                        <Eye size={22} color="#269396" />
                                    }
                                </TouchableOpacity>
                            </View>

                            {/* Confirm Password Input */}
                            <View 
                                className="flex-row items-center bg-white rounded-[16px] px-5 border border-transparent shadow-sm"
                                style={{ height: 60, marginBottom: hp(3) }}
                            >
                                <TextInput
                                    className="flex-1 text-[#0D1B2A]"
                                    style={{ fontSize: wp(4) }}
                                    placeholder="Confirm Password"
                                    placeholderTextColor="#9CA3AF"
                                    secureTextEntry={!showConfirmPassword}
                                />
                                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} className="p-2">
                                    {showConfirmPassword ? 
                                        <EyeOff size={22} color="#269396" /> : 
                                        <Eye size={22} color="#269396" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* --- Checkbox Section --- */}
                        <TouchableOpacity
                            className="flex-row items-center"
                            style={{ marginBottom: hp(3) }}
                            activeOpacity={0.7}
                            onPress={() => setAgree(!agree)}
                        >
                            <View 
                                className={`rounded-[6px] border-2 mr-3 justify-center items-center ${agree ? 'bg-[#269396] border-[#269396]' : 'border-[#269396] bg-transparent'}`}
                                style={{ width: 24, height: 24 }}
                            >
                                {agree && <Check size={16} color="#FFF" strokeWidth={3} />}
                            </View>
                            <Text className="font-medium text-[#0D1B2A]" style={{ fontSize: wp(4) }}>
                                I agree to terms & conditions
                            </Text>
                        </TouchableOpacity>

                        {/* --- Disclaimer Text --- */}
                        <Text 
                            className="text-[#718096] text-left"
                            style={{ fontSize: wp(3.2), lineHeight: wp(5), marginBottom: hp(5) }}
                        >
                            By continuing, I agree to SolarKoala's <Text className="text-[#269396] font-semibold">Terms of Service</Text>.
                            I also consent to the use of my app usage data to improve SolarKoala and the relevancy of advertising campaigns for the app. Team CS-73 will never use your journal entries: only you can read them. See our <Text className="text-[#269396] font-semibold">Privacy Policy</Text> for more information.
                        </Text>

                        {/* --- Continue Button --- */}
                        <TouchableOpacity 
                            className="bg-[#269396] justify-center items-center shadow-md active:opacity-90 rounded-[16px]"
                            style={{ 
                                height: 60, 
                                shadowColor: '#269396', 
                                shadowOffset: { width: 0, height: 4 }, 
                                shadowOpacity: 0.3, 
                                shadowRadius: 8, 
                                elevation: 5 
                            }}
                        >
                            <Text className="text-white font-bold" style={{ fontSize: wp(4.5) }}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
};

export default EmailSignupForm;