import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Image,
    Platform,
    StatusBar
} from 'react-native';
import { ArrowRight, X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

const TourScreen2 = () => {
    const navigation = useNavigation<RootStackNavigationProp>();

    return (
        // 1. Background Theme: Cream/Yellow (#FFF8E7)
        <View className="flex-1 bg-[#FFF8E7] relative overflow-hidden">
            
            {/* --- Custom Background Waves (Soft Yellow/Orange Tints) --- */}
            {/* Top Left Wave */}
            <View className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-[#FFE0B2] rounded-full opacity-40" />
            
            {/* Top Right Wave */}
            <View className="absolute top-[40px] right-[-100px] w-[280px] h-[280px] bg-[#FFECB3] rounded-full opacity-40" />
            
            {/* Middle Left Wave */}
            <View className="absolute top-[35%] left-[-50px] w-[150px] h-[150px] bg-[#FFE0B2] rounded-full opacity-30" />

            <SafeAreaView 
                className="flex-1" 
                style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
            >
                {/* --- Header Section --- */}
                <View className="w-full z-10 px-6 pt-2 justify-between flex-row items-start">
                     {/* Spacer */}
                     <View className="w-8" /> 

                    {/* "Step Two" Badge - Yellow Theme */}
                    <View className="border border-[#5D4037] rounded-full px-5 py-[6px] bg-[#FFF8E7]/50 mt-2">
                        <Text className="text-[#5D4037] font-semibold text-[14px] tracking-wide">
                            Step Two
                        </Text>
                    </View>

                    {/* Close Button */}
                    <TouchableOpacity className="p-2">
                        <X color="#4A3B32" size={24} />
                    </TouchableOpacity>
                </View>

                {/* --- Center Graphic --- */}
                <View className="flex-1 justify-center items-center z-0 relative">
                    {/* Note: Add the phone image from your design to assets folder 
                       and name it 'tour2.jpg' or similar.
                    */}
                    <Image
                        source={require('../assets/tour1.jpg')} // මෙතනට අලුත් Image එක දාන්න (tour2.jpg)
                        style={{ 
                            width: width * 0.85, 
                            height: height * 0.4, 
                            marginBottom: 20 
                        }}
                        resizeMode="contain"
                    />
                </View>

                {/* --- Bottom White Card Section --- */}
                <View className="relative w-full">
                    
                    {/* THE CURVE HACK (Same as Screen 1) */}
                    <View 
                        style={{
                            position: 'absolute',
                            top: -50,
                            left: -width * 0.25,
                            width: width * 1.5,
                            height: 100,
                            backgroundColor: 'white',
                            borderTopLeftRadius: width,
                            borderTopRightRadius: width,
                            transform: [{ scaleX: 1.2 }]
                        }}
                    />

                    {/* Main White Content Area */}
                    <View className="bg-white w-full items-center px-8 pb-10 pt-4 h-auto min-h-[300px]">
                        
                        {/* Progress Bar - Yellow Theme */}
                        <View className="flex-row w-[100px] h-[6px] gap-2 mb-8 mt-2">
                            {/* Step 1 Completed (Yellow) */}
                            <View className="flex-1 bg-[#FBC02D] rounded-full" />
                            {/* Step 2 Active (Yellow) */}
                            <View className="flex-1 bg-[#FBC02D] rounded-full" />
                            {/* Step 3 Inactive (Light Gray/Yellow) */}
                            <View className="flex-1 bg-[#FFF3E0] rounded-full" />
                        </View>

                        {/* Text Content */}
                        <View className="mb-8 items-center">
                            <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                Seamlessly sync all your
                            </Text>
                            <View className="flex-row flex-wrap justify-center">
                                <Text className="text-[26px] font-bold text-[#F9A825] leading-[36px]">
                                    devices
                                </Text>
                                <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                    {' '}into one smart
                                </Text>
                            </View>
                            <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                network
                            </Text>
                        </View>

                        {/* Next Button - Pale Yellow Background */}
                        <TouchableOpacity
                            className="w-[72px] h-[72px] bg-[#FDF3D8] rounded-full justify-center items-center mb-4"
                            onPress={() => navigation.navigate('Welcome')}
                            activeOpacity={0.8}
                            style={{ 
                                shadowColor: '#8D6E63',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.25,
                                shadowRadius: 8,
                                elevation: 6,
                            }}
                        >
                            <ArrowRight color="#1A1A1A" size={28} strokeWidth={1.5} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default TourScreen2;