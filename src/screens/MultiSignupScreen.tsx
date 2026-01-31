import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Dimensions // 1. Screen size එක ගන්න මෙය එකතු කළා
} from 'react-native';
import { Mail, Menu, ArrowLeft, Eye, EyeOff, Check } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SocialButton from '../components/SocialButton';

// Screen එකේ පළල සහ උස ලබා ගැනීම
const { width, height } = Dimensions.get('window');

const MultiSignupScreen = ({ onSignupComplete }: { onSignupComplete: () => void }) => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);

    // Step 1: Responsive Layout for Mobile
    const renderStep1 = () => (
        <ScrollView 
            contentContainerStyle={{ 
                flexGrow: 1, 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                paddingBottom: 20, 
                paddingHorizontal: 24 
            }}
            showsVerticalScrollIndicator={false}
            className="w-full"
        >
            {/* Top/Middle Content Wrapper */}
            <View className="w-full items-center justify-center flex-1">
                
                {/* Responsive Image: 
                   Screen width එකෙන් 80% ක් ගන්නවා. 
                   නමුත් Screen height එකෙන් 40% කට වඩා ලොකු වෙන්න දෙන්නේ නෑ.
                */}
                <Image
                    source={require('../assets/koala1.jpg')}
                    style={{
                        width: width * 0.8,
                        height: width * 0.8,
                        maxWidth: 350,
                        maxHeight: height * 0.4, // උස සීමා කිරීම (Small screens සඳහා)
                        marginBottom: 20
                    }}
                    resizeMode="contain"
                />

                {/* Headline Text Section */}
                <View className="items-center">
                    <Text 
                        className="text-[#0D1B2A] font-bold text-center"
                        style={{ fontSize: width * 0.065, color: '#0D1B2A' }} // Font size එක screen එකට අනුව වෙනස් වේ
                    >
                        A step Closer to
                    </Text>
                    
                    <View className="items-center mt-1">
                        <Text 
                            className="text-[#0D1B2A] font-extrabold text-center"
                            style={{ 
                                fontSize: width * 0.085, // ලොකු අකුරු Responsive කළා
                                color: '#0D1B2A',
                                lineHeight: width * 0.1
                            }}
                        >
                            Smarter days
                        </Text>
                        <View className="w-[110%] h-[3px] bg-[#0D1B2A] mt-1 rounded-full opacity-90" />
                    </View>
                </View>

                {/* Subtext */}
                <Text 
                    className="text-[#4A5568] text-[15px] text-center mt-6 leading-[22px] font-medium"
                    style={{ color: '#4A5568' }}
                >
                    Create an account & take a step{'\n'}toward self care
                </Text>
            </View>

            {/* Bottom Buttons Section */}
            <View className="w-full gap-y-3 mt-8">
                <SocialButton
                    title="Sign up with Google"
                    icon={<Image source={require('../assets/Google_Favicon.png')} style={{ width: 22, height: 22 }} />}
                    onPress={() => { }}
                />
                <SocialButton
                    title="Sign up with Email"
                    icon={<Mail color="#1A202C" size={22} />}
                    onPress={() => setStep(2)}
                />
            </View>
        </ScrollView>
    );

    // Step 2: Form Screen
    const renderStep2 = () => (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 w-full"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="w-full"
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingBottom: 30 }}
            >
                <View className="w-full mt-5">
                    <Text className="text-4xl font-bold text-[#0D1B2A]">Sign up</Text>
                    <View className="flex-row mt-[5px] mb-[30px]">
                        <Text className="text-base text-[#666]">Already have an account? </Text>
                        <TouchableOpacity>
                            <Text className="text-base text-[#269396] font-bold">Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="w-full">
                    <TextInput
                        className="bg-white h-[60px] rounded-xl px-5 text-base mb-[15px] border border-[#F0F0F0] shadow-sm"
                        placeholder="Email Address"
                        placeholderTextColor="#999"
                    />

                    <View className="flex-row items-center bg-white h-[60px] rounded-xl px-5 mb-[15px] border border-[#F0F0F0] shadow-sm">
                        <TextInput
                            className="flex-1 text-base"
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row items-center bg-white h-[60px] rounded-xl px-5 mb-[15px] border border-[#F0F0F0] shadow-sm">
                        <TextInput
                            className="flex-1 text-base"
                            placeholder="Confirm Password"
                            secureTextEntry={!showConfirmPassword}
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        className="flex-row items-center my-5"
                        onPress={() => setAgree(!agree)}
                    >
                        <View className={`w-[22px] h-[22px] rounded-md border-2 border-[#269396] mr-2.5 justify-center items-center ${agree ? 'bg-[#269396]' : ''}`}>
                            {agree && <Check size={14} color="#FFF" strokeWidth={3} />}
                        </View>
                        <Text className="text-[15px] text-[#0D1B2A] font-medium">I agree to terms & conditions</Text>
                    </TouchableOpacity>

                    <Text className="text-xs text-[#777] leading-[18px] mb-[30px]">
                        By continuing, I agree to SolarKoala's <Text className="text-[#269396] font-semibold">Terms of Service</Text>.
                        I also consent to the use of my app usage data to improve SolarKoala. Team CS-73 will never use your journal entries.
                        See our <Text className="text-[#269396] font-semibold">Privacy Policy</Text> for more information.
                    </Text>

                    <TouchableOpacity
                        className="bg-[#269396] h-[60px] rounded-[15px] justify-center items-center"
                        onPress={onSignupComplete}
                    >
                        <Text className="text-white text-lg font-bold">Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );

    return (
        <LinearGradient
            colors={step === 1 ? ['#FFFDF5', '#F0F7FF'] : ['#F8FBFF', '#F8FBFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-1"
        >
            <SafeAreaView className="flex-1 items-center">
                <View className="flex-1 w-full max-w-[500px]">
                    <View className="flex-row justify-between px-6 pt-2 w-full z-10">
                        <View style={{ width: 28 }}>
                            {step > 1 && (
                                <TouchableOpacity onPress={() => setStep(1)}>
                                    <ArrowLeft color="#333" size={28} />
                                </TouchableOpacity>
                            )}
                        </View>
                        <TouchableOpacity>
                            <Menu color="#333" size={28} />
                        </TouchableOpacity>
                    </View>

                    <View className="flex-1 items-center w-full">
                        {step === 1 ? renderStep1() : renderStep2()}
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default MultiSignupScreen;