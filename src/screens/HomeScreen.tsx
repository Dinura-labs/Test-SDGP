import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Platform,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Bell, ChevronDown } from 'lucide-react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// Responsive helpers
const wp = (percentage) => (width * percentage) / 100;
const hp = (percentage) => (height * percentage) / 100;

// --- SVG COMPONENTS (Bottom Navigation Icons) ---
const HomeIcon = ({ color = "#056B87" }) => (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <Path d="M6.81605 0.890825C7.2845 -0.29695 8.9655 -0.296937 9.43395 0.890838L10.8856 4.57165C11.0286 4.93429 11.3158 5.22134 11.6784 5.36435L15.3591 6.81605C16.547 7.2845 16.547 8.9655 15.3591 9.43395L11.6784 10.8856C11.3158 11.0286 11.0286 11.3158 10.8856 11.6784L9.43395 15.3591C8.9655 16.547 7.2845 16.547 6.81605 15.3591L5.36435 11.6784C5.22134 11.3158 4.93429 11.0286 4.57165 10.8856L0.890825 9.43395C-0.29695 8.9655 -0.296937 7.2845 0.890838 6.81605L4.57165 5.36435C4.93429 5.22134 5.22134 4.93429 5.36435 4.57165L6.81605 0.890825Z" fill={color} />
        <Path opacity="0.5" d="M18.6556 14.2395C18.9131 13.5868 19.8368 13.5868 20.0943 14.2395L21.2201 17.0941C21.2987 17.2935 21.4565 17.4512 21.6558 17.5298L24.5105 18.6556C25.1631 18.9131 25.1631 19.8368 24.5105 20.0943L21.6558 21.2201C21.4565 21.2987 21.2987 21.4565 21.2201 21.6558L20.0943 24.5105C19.8368 25.1631 18.9131 25.1631 18.6556 24.5105L17.5298 21.6558C17.4512 21.4565 17.2935 21.2987 17.0941 21.2201L14.2395 20.0943C13.5868 19.8368 13.5868 18.9131 14.2395 18.6556L17.0941 17.5298C17.2935 17.4512 17.4512 17.2935 17.5298 17.0941L18.6556 14.2395Z" fill={color} />
    </Svg>
);

const BatteryIcon = ({ color = "#056B87" }) => (
    <Svg width="26" height="20" viewBox="0 0 26 20" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 5.28595 1.49012e-07 2.92894 1.46446 1.46446C2.92894 -1.49012e-07 5.28595 0 10 0H11.875C16.589 0 18.9461 -1.49012e-07 20.4105 1.46446C21.875 2.92894 21.875 5.28595 21.875 10C21.875 14.714 21.875 17.0711 20.4105 18.5355C18.9461 20 16.589 20 11.875 20H10C5.28595 20 2.92894 20 1.46446 18.5355C1.49012e-07 17.0711 0 14.714 0 10ZM12.4751 5.52979C12.8729 5.86126 12.9266 6.45241 12.5952 6.85017L10.7516 9.0625H13.125C13.4888 9.0625 13.8197 9.27287 13.974 9.60237C14.1283 9.93175 14.0781 10.3207 13.8452 10.6001L10.7202 14.3501C10.3887 14.7479 9.79759 14.8016 9.39983 14.4702C9.00206 14.1387 8.94833 13.5476 9.27979 13.1499L11.1234 10.9375H8.75C8.38624 10.9375 8.0553 10.7271 7.90101 10.3976C7.74671 10.0682 7.79691 9.67925 8.02979 9.39987L11.1548 5.64982C11.4863 5.25206 12.0774 5.19832 12.4751 5.52979Z" fill={color} />
        <Path d="M24.0625 12.5C24.0625 13.0177 24.4822 13.4375 25 13.4375C25.5178 13.4375 25.9375 13.0177 25.9375 12.5V7.5C25.9375 6.98224 25.5178 6.5625 25 6.5625C24.4822 6.5625 24.0625 6.98224 24.0625 7.5V12.5Z" fill={color} />
    </Svg>
);

const UserIcon = ({ color = "#056B87" }) => (
    <Svg width="18" height="25" viewBox="0 0 18 25" fill="none">
        <Path opacity="0.4" d="M8.79883 0C5.52383 0 2.86133 2.6625 2.86133 5.9375C2.86133 9.15 5.37383 11.75 8.64883 11.8625C8.74883 11.85 8.84883 11.85 8.92383 11.8625C8.94883 11.8625 8.96133 11.8625 8.98633 11.8625C8.99883 11.8625 8.99883 11.8625 9.01133 11.8625C12.2113 11.75 14.7238 9.15 14.7363 5.9375C14.7363 2.6625 12.0738 0 8.79883 0Z" fill={color} />
        <Path d="M15.15 15.1874C11.6625 12.8624 5.975 12.8624 2.4625 15.1874C0.875 16.2499 0 17.6874 0 19.2249C0 20.7624 0.875 22.1874 2.45 23.2374C4.2 24.4124 6.49995 24.9999 8.79995 24.9999C11.1 24.9999 13.4 24.4124 15.15 23.2374C16.725 22.1749 17.6 20.7499 17.6 19.1999C17.5875 17.6624 16.725 16.2374 15.15 15.1874Z" fill={color} />
    </Svg>
);

const BoltIcon = ({ color = "#056B87" }) => (
    <Svg width="12" height="18" viewBox="0 0 12 18" fill="none">
        <Path d="M10.7403 17.6796C10.623 17.6794 10.5079 17.648 10.4068 17.5885C10.3058 17.5291 10.2223 17.4439 10.1651 17.3415L6.43196 10.6478L2.49684 12.0366C2.40538 12.0693 2.30783 12.0812 2.2112 12.0716C2.11457 12.062 2.02127 12.0311 1.938 11.9812C1.85474 11.9312 1.78358 11.8634 1.72965 11.7827C1.67572 11.7019 1.64036 11.6102 1.62611 11.5142L0.00756979 0.758091C-0.0151508 0.609525 0.0136297 0.457657 0.089133 0.327706C0.164636 0.197754 0.282319 0.0975392 0.422639 0.0437016C0.562958 -0.010136 0.717472 -0.0143566 0.860521 0.0317408C1.00357 0.0778381 1.12655 0.17148 1.20903 0.297116L4.99489 6.04248L8.89489 4.46492C8.98808 4.42749 9.08859 4.41183 9.18875 4.41911C9.28892 4.4264 9.3861 4.45645 9.47289 4.50698C9.55968 4.5575 9.6338 4.62717 9.6896 4.71067C9.7454 4.79417 9.78141 4.8893 9.79489 4.98882L11.3929 16.9332C11.4137 17.0853 11.3805 17.2398 11.2993 17.3699C11.218 17.5001 11.0938 17.5977 10.9481 17.6459C10.8812 17.6687 10.8109 17.6801 10.7403 17.6796Z" fill={color} />
    </Svg>
);

const ChatIcon = ({ color = "#056B87" }) => (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <Path d="M15 27.1875C13.1521 27.1921 11.3278 26.7726 9.66754 25.9612C7.77352 26.8826 5.6755 27.3047 3.57254 27.1875C3.22379 27.1875 2.85004 27.18 2.46379 27.165C2.29149 27.1596 2.12412 27.1062 1.98056 27.0108C1.837 26.9154 1.72295 26.7817 1.65129 26.625C1.5768 26.4697 1.54727 26.2966 1.56605 26.1254C1.58482 25.9542 1.65116 25.7917 1.75754 25.6562C2.9199 24.2613 3.7996 22.6535 4.34754 20.9225C3.21753 18.8867 2.69408 16.5699 2.83907 14.246C2.98406 11.9221 3.79144 9.68836 5.16573 7.80881C6.54003 5.92926 8.42378 4.48252 10.5943 3.63965C12.7647 2.79678 15.1312 2.59303 17.4138 3.05247C17.0504 3.59267 16.7658 4.18194 16.5688 4.80247C14.6337 4.50456 12.6538 4.76351 10.8605 5.54907C9.06712 6.33463 7.53438 7.61436 6.44134 9.2387C5.3483 10.863 4.74013 12.7649 4.68788 14.7221C4.63563 16.6793 5.14147 18.6109 6.14629 20.2912C6.26678 20.492 6.3078 20.7305 6.26129 20.96C5.88968 22.5163 5.22814 23.9886 4.31129 25.3C5.98032 25.3556 7.6319 24.9457 9.08129 24.1162C9.23897 24.0052 9.4272 23.9458 9.62004 23.9462C9.77781 23.9466 9.93295 23.9866 10.0713 24.0625C11.7595 24.9798 13.6703 25.4075 15.5884 25.2974C17.5066 25.1874 19.3559 24.5439 20.9281 23.4395C22.5002 22.335 23.7328 20.8136 24.4869 19.0464C25.241 17.2793 25.4867 15.3367 25.1963 13.4375C25.8168 13.2405 26.4061 12.9559 26.9463 12.5925C27.3016 14.3613 27.2599 16.187 26.8243 17.9378C26.3887 19.6887 25.57 21.321 24.4272 22.7172C23.2844 24.1133 21.8461 25.2385 20.2159 26.0115C18.5857 26.7845 16.8042 27.1862 15 27.1875ZM18.75 18.4375H10C9.7514 18.4375 9.51294 18.3387 9.33712 18.1629C9.16131 17.9871 9.06254 17.7486 9.06254 17.5C9.06254 17.2513 9.16131 17.0129 9.33712 16.8371C9.51294 16.6612 9.7514 16.5625 10 16.5625H18.75C18.9987 16.5625 19.2371 16.6612 19.413 16.8371C19.5888 17.0129 19.6875 17.2513 19.6875 17.5C19.6875 17.7486 19.5888 17.9871 19.413 18.1629C19.2371 18.3387 18.9987 18.4375 18.75 18.4375ZM16.25 13.4375H10C9.7514 13.4375 9.51294 13.3387 9.33712 13.1629C9.16131 12.9871 9.06254 12.7486 9.06254 12.5C9.06254 12.2513 9.16131 12.0129 9.33712 11.8371C9.51294 11.6612 9.7514 11.5625 10 11.5625H16.25C16.4987 11.5625 16.7371 11.6612 16.9129 11.8371C17.0888 12.0129 17.1875 12.2513 17.1875 12.5C17.1875 12.7486 17.0888 12.9871 16.9129 13.1629C16.7371 13.3387 16.4987 13.4375 16.25 13.4375ZM24.515 11.0237C23.459 8.5284 21.4729 6.54228 18.9775 5.48622C19.1813 4.88018 19.5144 4.32569 19.9538 3.86122C22.7068 5.08874 24.9088 7.29072 26.1363 10.0437C25.6718 10.4831 25.1173 10.8162 24.5113 11.02L24.515 11.0237Z" fill={color} />
        <Path d="M23.125 11.25C22.2597 11.25 21.4138 10.9934 20.6944 10.5127C19.9749 10.032 19.4142 9.34867 19.083 8.54924C18.7519 7.74982 18.6653 6.87015 18.8341 6.02148C19.0029 5.17282 19.4196 4.39326 20.0314 3.78141C20.6433 3.16956 21.4228 2.75288 22.2715 2.58407C23.1201 2.41526 23.9998 2.5019 24.7992 2.83303C25.5987 3.16416 26.282 3.72492 26.7627 4.44438C27.2434 5.16385 27.5 6.00971 27.5 6.875C27.5 8.03532 27.0391 9.14812 26.2186 9.96859C25.3981 10.7891 24.2853 11.25 23.125 11.25Z" fill="#FF6359" />
    </Svg>
);


const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white">
            {/* Background Gradient */}
            <LinearGradient
                colors={['#FFFDF5', '#EDF7FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="absolute w-full h-full"
            />

            <SafeAreaView className="flex-1" style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
                <ScrollView 
                    contentContainerStyle={{ paddingBottom: 100 }} 
                    showsVerticalScrollIndicator={false}
                    className="flex-1"
                >
                    {/* --- Header --- */}
                    <View className="flex-row justify-between items-center px-6 mt-2 mb-6">
                        <View className="flex-row items-center">
                            <Image
                                source={require('../assets/avatar.jpg')}
                                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                            />
                            <View className="ml-3">
                                <Text className="text-[#666] text-[13px]">Welcome back,</Text>
                                <Text className="text-[#0D1B2A] text-[20px] font-bold">User Name</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="bg-white/60 p-2.5 rounded-full shadow-sm">
                            <Bell color="#333" size={22} />
                        </TouchableOpacity>
                    </View>

                    {/* --- Main Score Display --- */}
                    <View className="items-center justify-center mb-6 z-10" style={{ marginTop: hp(2) }}>
                        {/* Faded Background Numbers */}
                        <Text className="absolute left-[15%] font-bold text-[#056B87] opacity-30" style={{ fontSize: wp(7) }}>7.3</Text>
                        <Text className="absolute right-[15%] font-bold text-[#056B87] opacity-30" style={{ fontSize: wp(7) }}>7.5</Text>

                        {/* Main Central Card */}
                        <View 
                            className="bg-white/50 justify-center items-center rounded-[20px] border border-white/60"
                            style={{
                                width: wp(35),
                                height: wp(22),
                                shadowColor: "#056B87",
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: 0.15,
                                shadowRadius: 20,
                                elevation: 10
                            }}
                        >
                            <Text className="font-bold text-[#056B87]" style={{ fontSize: wp(12) }}>7.4</Text>
                        </View>
                    </View>

                    {/* --- Controls & Solar Panel Image --- */}
                    <View className="flex-row justify-between items-center px-6 mb-6">
                        <TouchableOpacity className="flex-row items-center bg-transparent border border-[#999] rounded-full px-4 py-1.5">
                            <Text className="text-[#555] mr-2 text-[13px]">Daily</Text>
                            <ChevronDown size={14} color="#555" />
                        </TouchableOpacity>

                        <Image
                            source={require('../assets/panel.jpg')}
                            className=""
                            resizeMode="contain"
                            style={{
                                width: wp(30),
                                height: wp(20),
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 5 },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                            }}
                        />

                        <TouchableOpacity className="flex-row items-center bg-transparent border border-[#999] rounded-full px-4 py-1.5">
                            <Text className="text-[#555] mr-2 text-[13px]">kWh</Text>
                            <ChevronDown size={14} color="#555" />
                        </TouchableOpacity>
                    </View>

                    {/* --- Battery Status Card --- */}
                    <View className="mx-6 bg-[#F3F6F8] rounded-[20px] p-5 flex-row justify-between items-center mb-6">
                        <View>
                            <Text className="text-[16px] font-bold text-[#0D1B2A]">Battery Status</Text>
                            <Text className="text-[#777] text-[13px] mt-0.5">Normal</Text>
                        </View>
                        <View className="flex-row items-center">
                            {/* Simple Battery Icon Graphic */}
                            <View className="bg-[#00C853] w-[24px] h-[14px] rounded-[3px] items-center justify-center mr-2">
                                <View className="text-white text-[8px] font-bold">
                                    <View className="w-[2px] h-[6px] bg-white/50" /> 
                                </View> 
                            </View>
                            <Text className="text-[14px] font-bold text-[#0D1B2A]">85%</Text>
                            <Text className="text-[#777] text-[12px] ml-1">Charging</Text>
                        </View>
                    </View>

                    {/* --- Graph Section --- */}
                    <View className="mx-6 bg-white/60 rounded-[25px] p-6 shadow-sm border border-white">
                        <View className="flex-row justify-between items-start mb-6">
                            <View>
                                <Text className="text-[14px] font-bold text-[#0D1B2A]">Electricity Consumed Pattern</Text>
                                <Text className="text-[#777] text-[12px] mt-1">This Week <Text className="text-[#00C853] font-bold">+5%</Text></Text>
                            </View>
                            <TouchableOpacity className="flex-row items-center bg-transparent border border-[#ccc] rounded-full px-3 py-1">
                                <Text className="text-[#555] mr-1 text-[11px]">Weekly</Text>
                                <ChevronDown size={12} color="#555" />
                            </TouchableOpacity>
                        </View>

                        {/* Custom Bar Graph Visualization */}
                        <View className="flex-row justify-between items-end w-full px-1" style={{ height: hp(20) }}>
                            {/* Days Logic: height represents % */}
                            <GraphBar day="Mon" height={50} color="#ADD8E6" secondaryHeight={40} secondaryColor="#E98E58" />
                            <GraphBar day="Tue" height={90} color="#056B87" /> 
                            <GraphBar day="Wed" height={60} color="#ADD8E6" secondaryHeight={50} secondaryColor="#E98E58" />
                            <GraphBar day="Thu" height={70} color="#056B87" secondaryHeight={45} secondaryColor="#E98E58" />
                            <GraphBar day="Fri" height={65} color="#ADD8E6" />
                            <GraphBar day="Sat" height={85} color="#056B87" secondaryHeight={60} secondaryColor="#E98E58" />
                            <GraphBar day="Sun" height={55} color="#ADD8E6" />
                        </View>
                    </View>
                </ScrollView>

                {/* --- Bottom Navigation Bar --- */}
                <View 
                    className="absolute bottom-0 w-full h-[85px] bg-white flex-row justify-around items-center pb-5 rounded-t-[30px]"
                    style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: -5 },
                        shadowOpacity: 0.05,
                        shadowRadius: 10,
                        elevation: 10
                    }}
                >
                    <TouchableOpacity><HomeIcon color="#056B87" /></TouchableOpacity>
                    <TouchableOpacity><BatteryIcon color="#056B87" /></TouchableOpacity>
                    <TouchableOpacity><UserIcon color="#056B87" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('TechnicianBooking')}><BoltIcon color="#056B87" /></TouchableOpacity>
                    <TouchableOpacity><ChatIcon color="#056B87" /></TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>
    );
};

// Helper Component for Graph Bars
const GraphBar = ({ day, height, color, secondaryHeight, secondaryColor }: any) => (
    <View className="items-center justify-end h-full w-[10%] gap-1">
        <View className="h-full bg-[#E0E0E0] rounded-full absolute opacity-30" style={{ width: wp(1.5), borderStyle: 'dotted' }} /> 
        
        {/* Bars Container */}
        <View className="items-center justify-end w-full h-[85%]"> 
            {secondaryHeight && (
                <View 
                    className="rounded-full mb-1" 
                    style={{ width: wp(1.5), height: `${secondaryHeight}%`, backgroundColor: secondaryColor }} 
                />
            )}
            <View 
                className="rounded-full" 
                style={{ width: wp(1.5), height: `${height}%`, backgroundColor: color }} 
            />
        </View>

        <Text className="text-[#999] text-[10px] mt-2">{day}</Text>
    </View>
);

export default HomeScreen;