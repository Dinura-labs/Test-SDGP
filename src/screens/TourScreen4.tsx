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

const TourScreen4 = ({ onNext }: { onNext: () => void }) => {
    return (
        // 1. Background Theme: Light Purple (#F3E5F5)
        <View className="flex-1 bg-[#F3E5F5] relative overflow-hidden">
            
            {/* --- Custom Background Waves (Purple Shapes) --- */}
            {/* Top Right Large Wave */}
            <View className="absolute top-[-50px] right-[-80px] w-[300px] h-[300px] bg-[#E1BEE7] rounded-full opacity-40" />
            
            {/* Top Left Small Wave */}
            <View className="absolute top-[80px] left-[-60px] w-[200px] h-[200px] bg-[#E1BEE7] rounded-full opacity-30" />
            
            {/* Middle Right Wave */}
            <View className="absolute top-[40%] right-[-40px] w-[150px] h-[150px] bg-[#CE93D8] rounded-full opacity-20" />

            <SafeAreaView 
                className="flex-1" 
                style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
            >
                {/* --- Header Section --- */}
                <View className="w-full z-10 px-6 pt-2 justify-between flex-row items-start">
                     <View className="w-8" /> 

                    {/* "Step Five" Badge - Brown/Purple Border */}
                    <View className="border border-[#4A3B32] rounded-full px-5 py-[6px] bg-[#F3E5F5]/50 mt-2">
                        {/* Note: Image says Step Five, so we use Step Five here */}
                        <Text className="text-[#4A3B32] font-semibold text-[14px] tracking-wide">
                            Step Five
                        </Text>
                    </View>

                    {/* Close Button */}
                    <TouchableOpacity className="p-2">
                        <X color="#4A3B32" size={24} />
                    </TouchableOpacity>
                </View>

                {/* --- Center Graphic --- */}
                <View className="flex-1 justify-center items-center z-0 relative">
                    {/* Add your 4th/5th tour image here */}
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
                        
                        {/* Progress Bar - Purple Theme */}
                        <View className="flex-row w-[100px] h-[6px] gap-2 mb-8 mt-2">
                            {/* Previous Steps (Purple) */}
                            <View className="flex-1 bg-[#8E24AA] rounded-full" />
                            <View className="flex-1 bg-[#8E24AA] rounded-full" />
                            {/* Current Step (Purple) */}
                            <View className="flex-1 bg-[#8E24AA] rounded-full" />
                        </View>

                        {/* Text Content */}
                        <View className="mb-8 items-center">
                            <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                Know your battery
                            </Text>
                            <View className="flex-row flex-wrap justify-center">
                                <Text className="text-[26px] font-bold text-[#8E24AA] leading-[36px]">
                                    health
                                </Text>
                            </View>
                            <Text className="text-[26px] font-bold text-[#4A3B32] text-center leading-[36px]">
                                anytime, anywhere
                            </Text>
                        </View>

                        {/* Next Button - Light Purple Background */}
                        <TouchableOpacity
                            className="w-[72px] h-[72px] bg-[#E1BEE7] rounded-full justify-center items-center mb-4"
                            onPress={onNext}
                            activeOpacity={0.8}
                            style={{ 
                                shadowColor: '#7B1FA2',
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

export default TourScreen4;