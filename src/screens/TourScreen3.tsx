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

const { width, height } = Dimensions.get('window');

const TourScreen3 = ({ onNext }: { onNext: () => void }) => {
    return (
        // 1. Background Theme: Light Blue (#D8E5F0)
        <View className="flex-1 bg-[#D8E5F0] relative overflow-hidden">
            
            {/* --- Custom Background Petals (White/Blue shapes) --- */}
            {/* Center Top Large Petal */}
            <View className="absolute top-[-100px] left-[10%] w-[300px] h-[300px] bg-white rounded-full opacity-30" />
            
            {/* Left Petal */}
            <View className="absolute top-[50px] left-[-80px] w-[200px] h-[200px] bg-white rounded-full opacity-20" />
            
            {/* Right Petal */}
            <View className="absolute top-[50px] right-[-80px] w-[200px] h-[200px] bg-white rounded-full opacity-20" />

            <SafeAreaView 
                className="flex-1" 
                style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
            >
                {/* --- Header Section --- */}
                <View className="w-full z-10 px-6 pt-2 justify-between flex-row items-start">
                     <View className="w-8" /> 

                    {/* "Step Three" Badge - Brown border */}
                    <View className="border border-[#4A3B32] rounded-full px-5 py-[6px] bg-[#D8E5F0]/50 mt-2">
                        <Text className="text-[#4A3B32] font-semibold text-[14px] tracking-wide">
                            Step Three
                        </Text>
                    </View>

                    {/* Close Button */}
                    <TouchableOpacity className="p-2">
                        <X color="#4A3B32" size={24} />
                    </TouchableOpacity>
                </View>

                {/* --- Center Graphic --- */}
                <View className="flex-1 justify-center items-center z-0 relative">
                    {/* Add your 3rd tour image here */}
                    <Image
                        source={require('../assets/tour1.jpg')} 
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
                    
                    {/* THE CURVE HACK */}
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
                        
                        {/* Progress Bar - Blue/Teal Theme */}
                        <View className="flex-row w-[100px] h-[6px] gap-2 mb-8 mt-2">
                            {/* Step 1 Completed (Teal) */}
                            <View className="flex-1 bg-[#00ACC1] rounded-full" />
                            {/* Step 2 Completed (Teal) */}
                            <View className="flex-1 bg-[#00ACC1] rounded-full" />
                            {/* Step 3 Active (Teal) */}
                            <View className="flex-1 bg-[#00ACC1] rounded-full" />
                        </View>

                        {/* Text Content */}
                        <View className="mb-8 items-center">
                            <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                Stay prepared with
                            </Text>
                            <View className="flex-row flex-wrap justify-center">
                                <Text className="text-[26px] font-bold text-[#00ACC1] leading-[36px]">
                                    forecast-driven
                                </Text>
                                <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                    {' '}energy
                                </Text>
                            </View>
                            <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                updates.
                            </Text>
                        </View>

                        {/* Next Button - Grey/Blue Background */}
                        <TouchableOpacity
                            className="w-[72px] h-[72px] bg-[#CFD8DC] rounded-full justify-center items-center mb-4"
                            onPress={onNext}
                            activeOpacity={0.8}
                            style={{ 
                                shadowColor: '#546E7A',
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

export default TourScreen3;