import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';

export default function Daftar({ navigation }) {

  const [DataList, setDataList] = useState([
    {
      id: "0",
      Nama: "Honda Beat",
      Kondisi: "Bekas",
      Tahun: "2019",
      harga: "9.500.000",
      detail: "Kondisi mulus belum ada lecet, alasan penjualan butuh duit. Surat-surat lengkap dan pajak hidup. Mesin masih sehat",
      image: require("./images/beat.jpg"),
      status: 'Nego',
      kontak: '0812 3456 7890',
    },

    {
      id: "1",
      Nama: "Toyota Agya",
      Kondisi: "Bekas",
      Tahun: "2015",
      harga: "98.000.000",
      detail: "Kondisi ada lecet kecil di bumper kiri depan, alasan penjualan butuh duit. Surat-surat lengkap dan pajak hidup. Mesin masih sehat",
      image: require("./images/agya.jpg"),
      status: 'Nego',
      kontak: '0812 3346 7521',
    },

    {
      id: "2",
      Nama: "Tas Mini Eiger",
      Kondisi: "Bekas",
      Tahun: "2018",
      harga: "110.000",
      detail: "Resleting berfungsi normal, tidak ada lecet",
      image: require("./images/eiger.jpg"),
      status: 'Harga Pas',
      kontak: '0812 1024 2274',
    },

    {
      id: "3",
      Nama: "Gitar Akustik Kapook FG010",
      Kondisi: "Bekas",
      Tahun: "2014",
      harga: "300.000",
      detail: "Suara masih bagus, warna sedikit menguning dari awal pembelian",
      image: require("./images/kapook.jpg"),
      status: 'Nego',
      kontak: '0812 2343 2843',
    },

    {
      id: "4",
      Nama: "Bola Volly Mikasa",
      Kondisi: "Bekas",
      Tahun: "2020",
      harga: "80.000",
      detail: "Jarang dipakai. Masih mulus. Kulit masih lengkap",
      image: require("./images/mikasa.jpg"),
      status: 'Harga Pas',
      kontak: '0812 2742 3985',
    },

    {
      id: "5",
      Nama: "Acer Nitro 5 2019",
      Kondisi: "Bekas",
      Tahun: "2019",
      harga: "9.500.000",
      detail: "AN515-43, Ryzen 3 3550H, AMD Radeon Vega 8 2GB, Radeon RX 560X 4GB, 16GB, Sandisk SSD 120 GB SATA, Adata SX6000LNP 240 GB M.2 Nvme Pcle, Octavia PKS",
      image: require("./images/nitro.jpg"),
      status: 'Nego',
      kontak: '0812 0935 8947',
    },

    {
      id: "6",
      Nama: "Sepeda Polygon",
      Kondisi: "Bekas",
      Tahun: "2022",
      harga: "5.000.000",
      detail: "Pemakaian baru 1 bulan. Masih mulus belum ada lecet dan masih terlihat seperti baru",
      image: require("./images/polygon.jpg"),
      status: 'Harga Pas',
      kontak: '0812 4747 4563',
    },

    {
      id: "7",
      Nama: "Gitar Akustik Taylor",
      Kondisi: "Bekas",
      Tahun: "2019",
      harga: "600.000",
      detail: "Kondisi lecet sedikit tidak mempengaruhi kualitas usaha. Sudah ada amplifiernya dan bisa dicolok ke speaker",
      image: require("./images/taylor.jpg"),
      status: 'Harga Pas',
      kontak: '0812 3943 2223',
    },

    {
      id: "8",
      Nama: "Orgen Yamaha PSR E463",
      Kondisi: "Bekas",
      Tahun: "2020",
      harga: "6.000.000",
      detail: "Fungsionalitas masih bagus keseluruhan belum ada kerusakan",
      image: require("./images/yamaha.jpg"),
      status: 'Harga Pas',
      kontak: '0812 3342 3986',
    },

    {
      id: "9",
      Nama: "Saxophone Alto",
      Kondisi: "Bekas",
      Tahun: "2010",
      harga: "4.000.000",
      detail: "Suara masih bersih. Warna gold sudah mulai memudar dimakan usia. Asli dari luar Indonesia",
      image: require("./images/saxo.jpg"),
      status: 'Nego',
      kontak: '0812 3345 6786',
    },
  ]);

  // Scrolling Function
  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  // Generate Random Color
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
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
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require('./images/click_test.gif')}
            />
            <Text style={{ fontStyle: 'italic', fontSize: 15, marginBottom: 7 }}>Tap on an item for more details</Text>
          </View>
          {
            DataList.map(item => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', {
                  keyItem: item.id,
                  nameItem: item.Nama,
                  conditionItem: item.Kondisi,
                  yearItem: item.Tahun,
                  priceItem: item.harga,
                  detailItem: item.detail,
                  imageItem: item.image,
                  statusItem: item.status,
                  kontakItem: item.kontak,
                })}
                style={styles.contentBox}
                key={item.id}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                  <View style={{ justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                      <View style={{ backgroundColor: generateColor(), height: 10, width: 10, alignItems: 'center', borderRadius: 100, marginRight: 5, marginLeft: 3 }}></View>
                      <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 17, marginLeft: 7 }}>{item.Nama}</Text>
                    </View>
                    <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 25 }}>{item.Tahun}</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 25 }}>{item.Kondisi}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                      <Image source={require("./images/price.png")} style={{ width: 20, height: 20, marginRight: 5 }} />
                      <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 19 }}>Rp {item.harga}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#FFFFFF', height: '105%', width: 2, borderRadius: 100, marginRight: 10, marginLeft: 3 }}></View>
                    <Image source={item.image} style={{ width: 100, height: 100, borderTopRightRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }} />
                  </View>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
      <StatusBar backgroundColor='black' barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentBox: {
    width: '97%',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#47a6ff',
    elevation: 10,
  },
});
