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

const TourScreen1 = () => {
    const navigation = useNavigation<RootStackNavigationProp>();

    return (
        <View className="flex-1 bg-[#D3DAC1] relative overflow-hidden">
            
            {/* --- Custom Cloud Patterns --- */}
            <View className="absolute top-[-50px] left-[-60px] w-[200px] h-[200px] bg-[#F2F5EB] rounded-full opacity-60" />
            <View className="absolute top-[20px] right-[-80px] w-[220px] h-[220px] bg-[#F2F5EB] rounded-full opacity-60" />
            <View className="absolute top-[-40px] left-[40%] w-[150px] h-[150px] bg-[#F2F5EB] rounded-full opacity-40" />
            <View className="absolute top-[30%] left-[-40px] w-[120px] h-[120px] bg-[#F2F5EB] rounded-full opacity-50" />

            <SafeAreaView 
                className="flex-1" 
                style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
            >
                {/* --- Top Header Section --- */}
                <View className="w-full z-10 px-6 pt-2 justify-between flex-row items-start">
                     {/* Empty view to balance the flex layout if needed, or keep simpler logic */}
                     <View className="w-8" /> 

                    {/* "Step One" Badge - Centered */}
                    <View className="border border-[#4A3B32] rounded-full px-5 py-[6px] bg-[#D3DAC1]/50 mt-2">
                        <Text className="text-[#4A3B32] font-semibold text-[14px] tracking-wide">
                            Step One
                        </Text>
                    </View>

                    {/* Close Button - Right Aligned */}
                    <TouchableOpacity className="p-2">
                        <X color="#2D241E" size={24} />
                    </TouchableOpacity>
                </View>

                {/* --- Center Graphic (Phone Image) --- */}
                <View className="flex-1 justify-center items-center z-0 relative">
                    
                    <Image
                        source={require('../assets/tour1.jpg')} 
                        style={{ 
                            width: width * 0.85, 
                            height: height * 0.4, 
                            marginBottom: 20 // Adjust to lift image above the curve
                        }}
                        resizeMode="contain"
                    />
                </View>

                {/* --- Bottom White Card Section with Custom Curve --- */}
                <View className="relative w-full">
                    
                    {/* THE CURVE HACK: This creates the convex 'Hill' shape */}
                    <View 
                        style={{
                            position: 'absolute',
                            top: -50, // Pushes the curve up
                            left: -width * 0.25, // Centers the wider circle
                            width: width * 1.5, // Make it wider than screen
                            height: 100,
                            backgroundColor: 'white',
                            borderTopLeftRadius: width, // Huge radius for smooth curve
                            borderTopRightRadius: width,
                            transform: [{ scaleX: 1.2 }] // Stretches to make curve gentle
                        }}
                    />

                    {/* Main White Content Area */}
                    <View className="bg-white w-full items-center px-8 pb-10 pt-4 h-auto min-h-[300px]">
                        
                        {/* Progress Bar */}
                        <View className="flex-row w-[100px] h-[6px] gap-2 mb-8 mt-2">
                            <View className="flex-1 bg-[#00A86B] rounded-full" />
                            <View className="flex-1 bg-[#E8DCCD] rounded-full" />
                        </View>

                        {/* Text Content */}
                        <View className="mb-10 items-center">
                            <Text className="text-[26px] font-bold text-[#2D241E] text-center leading-[36px]">
                                Instantly track your energy
                            </Text>
                            <View className="flex-row flex-wrap justify-center">
                                <Text className="text-[26px] font-bold text-[#00A86B] leading-[36px]">
                                    flow
                                </Text>
                                <Text className="text-[26px] font-bold text-[#2D241E] leading-[36px]">
                                    {' '}as it happens
                                </Text>
                            </View>
                        </View>

                        {/* Next Button */}
                        <TouchableOpacity
                            className="w-[72px] h-[72px] bg-[#D4DFBF] rounded-full justify-center items-center mb-4"
                            onPress={() => navigation.navigate('Tour2')}
                            activeOpacity={0.8}
                            style={{ 
                                shadowColor: '#4A5568',
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

export default TourScreen1;