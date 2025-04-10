import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    View,
    Image,
    TextInput,
    Animated,
    ScrollView,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export default function ShopScreen() {
    const scrollViewRef = useRef(null);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const banners = [
        require('../assets/location.png'),
        require('../assets/MaskGroup.png'),
        require('../assets/onboard.png'),
    ];

    // Tự động cuộn
    const startAutoScroll = () => {
        stopAutoScroll();
        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % banners.length;
                scrollViewRef.current?.scrollTo({ x: newIndex * width, animated: true });
                return newIndex;
            });
        }, 3000);
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    }, []);

    // Xử lý khi scroll
    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    // Xử lý khi scroll kết thúc
    const handleMomentumScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / width);
        setIndex(newIndex);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Image source={require('../assets/Group.png')} style={styles.image} />
                    <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={20} color="gray" />
                        <Text style={styles.locationText}>Ha Noi</Text>
                    </View>
                </View>

                {/* Search Box */}
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="white" style={styles.searchIcon} />
                    <TextInput placeholder="Search store" style={styles.textInputDefault} />
                </View>

                {/* Banner ScrollView */}
                <View style={styles.bannerWrapper}>
                    <Animated.ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={handleScroll}
                        onMomentumScrollEnd={handleMomentumScrollEnd}
                        decelerationRate="fast"
                        snapToInterval={width}
                        snapToAlignment="start"
                        onTouchStart={stopAutoScroll}
                        onTouchEnd={startAutoScroll}
                        style={styles.bannerContainer}
                    >
                        {banners.map((image, i) => (
                            <Image key={i} source={image} style={styles.banner} />
                        ))}
                    </Animated.ScrollView>

                    {/* Dấu chấm bên dưới Banner */}
                    <View style={styles.indicatorContainer}>
                        {banners.map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    styles.indicatorDot,
                                    { backgroundColor: i === index ? '#333' : '#bbb' } // Đổi màu theo index
                                ]}
                            />
                        ))}
                    </View>
                </View>



            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { alignItems: 'center', marginTop: 30 },
    image: { alignItems: 'center' },
    locationContainer: { flexDirection: 'row', marginTop: 10, alignItems: 'center' },
    locationText: { fontSize: 20, fontWeight: '400', marginLeft: 5 },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 20,
    },
    searchIcon: { marginHorizontal: 10 },
    textInputDefault: { flex: 1, fontSize: 16, color: 'white' },
    bannerWrapper: {
        position: 'relative', // Giữ vị trí cố định của dấu chấm
        alignItems: 'center',
    },
    bannerContainer: {
        marginTop: 20
    },
    banner: {
        width,
        height: 200,
        borderRadius: 10
    },
    // Căn giữa dấu chấm phía dưới banner
    indicatorContainer: {
        position: "absolute",
        bottom: 10, // Đặt ở dưới banner
        flexDirection: 'row',
    },
    indicatorDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});
