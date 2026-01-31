import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    Platform,
    StatusBar
} from 'react-native';
import { ArrowRight, X } from 'lucide-react-native';

const { width } = Dimensions.get('window');

// Helper to scale fonts based on width - kept for icon sizes that might need it, 
// but text will use Tailwind classes for consistency where possible, or arbitrary values.
const scaleFont = (size: number) => (width / 375) * size;

const TourScreen1 = ({ onNext }: { onNext: () => void }) => {
    return (
        <View className="flex-1">
            {/* Background with Cloud Patterns */}
            <ImageBackground
                source={require('../assets/tour1.jpg')}
                className="flex-1 w-full h-full bg-[#C5D1B5]"
                resizeMode="cover"
            >
                <SafeAreaView 
                    className="flex-1" 
                    style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
                >
                    {/* Header with Close Icon */}
                    <View className="px-[6vw] items-end pt-[1vh]">
                        <TouchableOpacity className="p-[5px]">
                            <X color="#333" size={scaleFont(24)} />
                        </TouchableOpacity>
                    </View>

                    {/* Top Step Badge */}
                    <View className="items-center mt-[2vh]">
                        <View className="bg-white/40 px-[6vw] py-[1vh] rounded-[25px] border border-[#4A3428]">
                            <Text className="text-[#4A3428] font-semibold text-[16px]">Step One</Text>
                        </View>
                    </View>

                    {/* Spacer to push content down */}
                    <View className="flex-1" />

                    {/* White Bottom Card with Custom Curve */}
                    <View className="bg-white w-full rounded-t-[50vw] pt-[5vh] pb-[8vh] items-center px-[8vw]">
                        {/* Custom Progress Bar */}
                        <View className="mb-[4vh]">
                            <View className="w-[25vw] h-1.5 bg-[#F0E6E6] rounded-[10px] overflow-hidden">
                                <View className="w-[55%] h-full bg-[#00A86B] rounded-[10px]" />
                            </View>
                        </View>

                        {/* Text Content Area */}
                        <View className="mb-[5vh]">
                            <Text className="text-[26px] font-bold text-[#4A3428] text-center leading-[34px]">
                                Instantly track your energy {'\n'}
                                <Text className="text-[#00A86B]">flow</Text> as it happens
                            </Text>
                        </View>

                        {/* Next Navigation Circle Button */}
                        <TouchableOpacity
                            className="w-[20vw] h-[20vw] bg-[#DDE5D1] rounded-full justify-center items-center shadow-sm"
                            onPress={onNext}
                            activeOpacity={0.8}
                            style={{ 
                                elevation: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.15,
                                shadowRadius: 5,
                            }}
                        >
                            <ArrowRight color="#000" size={scaleFont(32)} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default TourScreen1;