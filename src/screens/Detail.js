import React from 'react';
import Icon from 'react-native-ico-material-design';
import { Text, View, StyleSheet, ScrollView, Image, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';

var iconHeight = 26;
var iconWidth = 26;

export default function Detail({ navigation }) {

    const route = useRoute();

    // Scrolling Function
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (
        <View style={styles.container}>
            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                    }
                }}
                scrollEventThrottle={400}
                style={{ flex: 1, width: '99%', }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>{route.params.nameItem}</Text>
                    <Image source={route.params.imageItem} style={styles.ItemImage} />
                    <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("./images/price_dark.png")} style={{ width: 20, height: 20, marginRight: 5 }} />
                            <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: 'bold' }}>Rp {route.params.priceItem}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="check-symbol" height={iconHeight - 6} width={iconWidth - 6} color='#2c3038' marginRight={5} />
                            <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: 'bold' }}>{route.params.statusItem}</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 100, width: '90%', marginTop: 5, marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center' }}>
                        <Icon name="power-connection-indicator" height={iconHeight - 10} width={iconWidth - 10} color='#2c3038' marginRight={8} />
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tahun</Text>
                    </View>
                    <View style={{ width: '73%', marginBottom: 15 }}>
                        <Text style={{ fontSize: 17 }}>{route.params.yearItem}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center' }}>
                        <Icon name="thumb-up-button" height={iconHeight - 10} width={iconWidth - 10} color='#2c3038' marginRight={8} />
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Kondisi</Text>
                    </View>
                    <View style={{ width: '73%', marginBottom: 15 }}>
                        <Text style={{ fontSize: 17 }}>{route.params.conditionItem}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center' }}>
                        <Icon name="attachment-clip" height={iconHeight - 10} width={iconWidth - 10} color='#2c3038' marginRight={8} />
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Catatan</Text>
                    </View>
                    <View style={{ width: '73%', marginBottom: 15 }}>
                        <Text style={{ fontSize: 17 }}>{route.params.detailItem}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center' }}>
                        <Icon name="framed-portrait" height={iconHeight - 10} width={iconWidth - 10} color='#2c3038' marginRight={8} />
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Kontak</Text>
                    </View>
                    <View style={{ width: '73%', marginBottom: 30 }}>
                        <Text style={{ fontSize: 17 }}>{route.params.kontakItem}</Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='black' barStyle="light-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#47a6ff',
        width: '100%',
        height: '100%',
    },

    ItemImage: {
        width: 350,
        height: 350,
        borderRadius: 8,
    }
});