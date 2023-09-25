import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet,
} from 'react-native';
import axios from 'axios';
import { Text } from 'react-native-paper';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        // Validate the input fields
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!password) {
            setError('Password is required');
            return;
        }
        // Validate the email format
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            setError('Email is not valid');
            return;
        }
        // Validate the password
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        // Call API to sign in with the provided email and password
        try {
            const response = await axios.post(
                'http://localhost:8000/travvolt/b2b/login',
                { email, password },
            );
            const data = response.data;
            console.log('add',data)
            // Store the user data in AsyncStorage
            // await AsyncStorage.setItem('user', JSON.stringify(data));
            // setError('');
            // Navigate to the home screen
            // navigation.navigate('Home');
        } catch (error) {
            console.error(error);
            setError('Email or password is incorrect');
        }
    };

    const SigiIn = async () => {
        const payload = {
            email: email,
            password: password
        };
        console.log('payload',payload)
        try {
            await axios({
                method: 'post',
                url: 'http://utilitywebapi.bisplindia.in/api/Login/UserLogin',
                data: payload,
                headers: {
                    'Content-Type': 'application/json',
                    'token':'QVBJQWNjZXNzQVBJQDEyMw=='
                },
            }).then(res => {

                console.log('vhjdksldldldjbkds----=----=-=-=->>>>', res?.data);


                // console.log('title', res?.data?.data?.title);
                // console.log('description', res?.data?.data?.description);
                // ToastAndroid.show('Request Raised', ToastAndroid.SHORT);
                // navigation.navigate("SuccessFull", { data: payload });
            });
        } catch (error) {

            console.log('ss', error);
            //   ToastAndroid.show(
            //     error?.response?.data?.message + '!',
            //     ToastAndroid.SHORT,
            //   );
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={SigiIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: 'blue' }}>I don't have an account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        padding: 10,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
    },
    error: {
        color: 'red',
        margin: 10,
    },
});

export default SignIn;
