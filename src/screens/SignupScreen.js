import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StatusBar } from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Animated, { FadeIn, FadeOut, FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'

export default function SignupScreen() {

    const navigation = useNavigation();

    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            <Image className="h-full w-full absolute" source={require("../../assets/images/background.png")} />

            {/* Light images */}
            <View className="flex-row justify-around w-full absolute">
                <Animated.Image entering={FadeInUp.delay(300).duration(1000).springify()} className="h-[220] w-[90]" source={require("../../assets/images/light.png")} />
                <Animated.Image entering={FadeInUp.delay(500).duration(1000).springify()} className="h-[160] w-[65]" source={require("../../assets/images/light.png")} />
            </View>

            {/* title and form */}
            <View className="w-full h-full justify-around pt-52">
                {/* title */}
                <View className="flex items-center">
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
                        Sign Up
                    </Animated.Text>
                </View>
                {/* form */}
                <View className="flex items-center mx-4 space-y-4">
                    <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 mt-10 rounded-2xl w-full">
                        <TextInput placeholder='Email' placeholderTextColor={"gray"} />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput placeholder='Username' placeholderTextColor={"gray"} />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                        <TextInput placeholder='Password' placeholderTextColor={"gray"} secureTextEntry />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
                        <TouchableOpacity className="w-full bg-sky-500 p-3 rounded-2xl mb-1">
                            <Text className="text-xl font-bold text-white text-center">SIgnUp</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
                        <Text className="text-neutral-700">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.push("Login")}>
                            <Text className="text-sky-600">Login</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}