/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Dimensions, 
  Image,
  Navigator, 
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// ============================ //
// modify the news list here!!! //
// ============================ //
global.news = [
  {
    id: 1,
    title: 'Antusiasme Para Debutan saat Ambil Race Pack MILO Jakarta International 10K',
    leading: 'Hari pertama pengambilan race pack MILO Jakarta International 10K disambut antusias para peserta.',
    picUrl: 'http://images.detik.com/community/media/visual/2016/07/20/c854d738-f300-45c2-b64b-b0c0a12a4aed_169.jpg',
    content: 'Hari pertama pengambilan race pack MILO Jakarta International 10K disambut antusias para peserta. Utamanya mereka yang akan menjalani debut pada perlombaan itu. \n\nMILO Jakarta International 10K akan bergulir empat hari lagi, Minggu (24/7/2016). Rabu (20/7) sampai Jumat (22/7), para peserta bisa mengambil race pack alias perlengkapan perlombaan di Area Oval Mall Epiwalk Rasuna Epicentrum, Jakarta. Pengambilannya dijadwalkan mulai pukul 12.00 WIB hingga pukul 20.00 WIB setiap harinya. \n\nDari pantauan detikSport, pembagian booth race pack dibagi menjadi dua, untuk kategori open dan close terdiri dari tujuh counter dengan masing-masing dua costumer service-nya. Sementara untuk kategori MILO Champ Squad hanya satu booth dan terpisah, berada di bagian kiri booth untuk 10K.\n\nTak hanya booth untuk pengambilan race pack, panitia pelaksana juga menyiapkan dua counter untuk peserta yang baru mendaftarkan diri untuk ikut di MILO Jakarta International 10K, kategori close.\n\nSetidaknya sudah ratusan peserta yang mengantri di counter MILO. Mereka ada yang mengantri untuk pengambilan race pack, sebagian lagi ada yang mengantri untuk mendaftar ulang.\n\nSeperti yang dilakukan Maureen Tuahatu Rustandi, 47 tahun. Ia sudah mengantri sejak jam 12 siang, namun terpaksa antri ulang karena dia belum mendapatkan nomor barcode registrasi.\n\n"Ya, tadi ada masalah sedikit saya belum dapat nomor regristasi akhirnya mesti antri ulang. Tapi tidak apa- apa, namanya event begini memang pasti banyak yang antri apalagi ini hari pertama " kata Maureen ketika ditemui detikSport.\n\nMaureen yang bekerja sebagai pekerja lepas bagian komunikasi di kawasan Bursa Efek Jakarta ini mengaku keikutsertaannya pada lomba ini karena terinspirasi suaminya yang lebih dulu menjajal lomba tersebut.\n\n"Saya sering lari di Senayan tapi bukan pehobi yang bagaimana, cuma supaya sehat saja. Nah, di sini kenapa saya ingin ikut, ya karena ingin menantang diri saya sendiri apalagi ini baru pertama. Tahun lalu, suami saya saja bisa capai finis. Masa saya tidak bisa," ungkap dia menyoal motivasi dia ikut.\n\nHal senada juga diungkapkan Sanny Wijaya, 25 tahun. Ia yang datang seorang diri ini mengaku antusias karena ajang ini menjadi keikutsertaan yang pertama sejak bergabung dengan komunitas lari Bogor Runner beberapa bulan lalu.\n\n"Ini baru pertama kali dan baru tahu juga ada ajang ini. Jadi saya ingin mencoba saja," kata Sanny. \n\nDari daftar saat ini, terdata ada 11. 269 peserta lari yang terdaftar online. Jumlah ini kemungkinan bertambah karena pendaftaran untuk kategori close masih dibuka sampai 22 Juli, atau hingga kuota 15 ribu terpenuhi.\n\nSedangkan yang datanya sudah masuk ke server pengambilan race pack ada sekitar 439 peserta untuk kategori open dan close. Sementara, MILO Champ Squad ada 18 anak.\n\n"Jumlah itu belum digabung karena kalau melihat yang antri sekarang kan banyak sekali. Jadi mungkin akan ada tambahan lagi," kata Abi Said, salah satu panitia server pendataan MILO Jakarta International 10K.\n\nSetiap peserta yang melakukan pendaftaran ulang di Epicentrum, tidak hanya akan mendapat nomor dada sekaligus chip timing, tetapi juga kaos dan buku panduan yang berisi informasi lomba.',
  },
  {
    id: 2,
    title: 'Situasi Politik di Turki Tak Kondusif, Mario Gomez Tinggalkan Besiktas',
    leading: 'Mario Gomez memutuskan untuk tak lagi membela Besiktas musim depan. Keputusan Gomez itu berkaitan dengan situasi politik di Turki dalam beberapa waktu terakhir.',
    picUrl: 'http://images.detik.com/visual/2016/06/25/9221c1a1-c036-4e31-a9e5-a13de0f0eea0_43.jpg',
    content: 'Istanbul - Mario Gomez memutuskan untuk tak lagi membela Besiktas pada musim depan. Keputusan Gomez itu berkaitan dengan situasi politik di Turki dalam beberapa waktu terakhir.\n\nGomez dipinjam Besiktas dari Fiorentina pada musim lalu. Bersama Besiktas, Gomez kembali tajam dan mencetak 28 gol dalam 41 pertandingan. Dia juga sukses mengantarkan Besiktas menjadi juara Liga Turki.\n\nKarena tampil produktif bersama Besiktas, Gomez pun masuk skuat timnas Jerman di Piala Eropa 2016, di mana dia mencetak dua gol untuk negaranya.\n\nBesiktas sebenarnya memiliki opsi untuk mengontrak Gomez secara permanen. Akan tetapi, si pemain memutuskan untuk meninggalkan Besiktas dan Turki.\n\n"Ini adalah sebuah keputusan sulit yang harus saya pikirkan masak-masak. Saya secara pribadi harus mengatakan kepada kalian fans Besiktas bahwa ini sangat berat bagi saya karena saya tidak akan main lagi untuk klub hebat ini di depan kalian di sebuah stadion yang unik," tulis Gomez di page Facebook-nya.\n\n"Alasan untuk hal ini sepenuhnya karena situasi politik! Tidak ada alasan keolahragaan atau alasan lain apapun yang membuat saya memutuskan hal ini. Ini murni karena kejadian mengerikan yang terjadi dalam beberapa hari terakhir. Saya berharap kalian bisa memahaminya," tambah Gomez.\n\nTurki diguncang percobaan kudeta militer pada Jumat (15/7/2016) lalu. Militer mencoba menggulingkan pemerintahan Presiden Recep Tayyip Erdogan, tapi gagal. \n\nPercobaan kudeta itu menewaskan sedikitnya 290 orang. Ribuan orang ditangkap dan puluhan ribu pegawai pemerintah dipecat terkait kejadian itu.\n\n"Saya berharap masalah politik ini bisa segera diselesaikan dengan damai. Setelahnya saya akan sangat berharap bisa main untuk Besiktas lagi! Klub dan negara ini sangat dekat dengan hati saya dalam sehatun terakhir. Semoga segera bertemu kalian lagi," kata Gomez. ',
  },
  {
    id: 3,
    title: 'Empat Oknum Polisi di Semarang Diamankan Karena Konsumsi Narkoba',
    leading: 'Empat oknum polisi di Semarang ditangkap lantaran terbukti mengonsumsi narkoba.',
    picUrl: 'http://images.detik.com/community/media/visual/2015/09/18/5e3e2ca1-ab5c-4cc9-84c1-03eed8591757_43.jpg',
    content: 'Semarang - Tiga oknum anggota Polrestabes Semarang, Jawa Tengah dinyatakan positif mengonsumsi obat-obatan terlarang saat dilakukan tes urine. Selain itu ada satu oknum lainnya yang kedapatan menyimpan pil ekstasi dan sempat membuang sabu ke kloset.\n\nMenurut informasi, terkuaknya empat oknum polisi pengguna obat terlarang itu merupakan pengembangan dari oknum lain di Pati. Pengembangan dilakukan dengan tes urine dan diketahui tiga orang dari Polsek Gunungpati Semarang positif narkoba.\n\nKemudian satu orang oknum anggota Polsek Banyumanik diketahui menyimpan ekstasi dan juga membuang sabu dalam plastik ke kloset. Kabid Propam Polda Jawa Tengah Kombes Budi Haryanto saat dikonfirmasi membenarkan ada penangkapan empat oknum polisi tersebut.\n\n"Ya terlibat narkoba, tes urinenya positif. Dari empat orang, dua atau tiga itu positif, satunya menyimpan ekstasi," kata Budi saat dikonfirmasi wartawan melalui telepon.\n\nEmpat oknum polisi yang tidak disebutkan identitasnya itu masih dilakukan pemeriksaan. Sanksi internal berupa pemberhentian tidak dengan hormat (PTDH) alias dipecat bakal diberlakukan jika terbukti sebagai pengedar.\n\n"Untuk pengedar pasti PTDH. Pemakai kita rehabilitasi, kita sidang disiplin," tegas Budi.\n\nSementara itu, Kapolrestabes Semarang Kombes Pol Burhanudin mengatakan pihaknya tegas mendukung pemeriksaan tuntas terhadap oknumnya yang terlibat narkoba.\n\n"Itu awalnya dari Pati. Kalau terlibat ya ditindak. Kalau terbukti ya diproses," tegas Burhanudin. ',
  },
];
// this variable is to contain 
// React's Navigator variable
global.n;

// index page, page of news list
class IndexPage extends Component {
  render() {
    // iterate global.news
    contents = global.news.map(function (item) {
        return (
          <IndexNewsBox key={item.id} title={item.title} leading={item.leading} picUrl={item.picUrl} content={item.content} />
        );
    });
    return (
      <ScrollView style={styles.container}>
        <View style={{paddingTop:5}}></View>
        <View>
          {contents}
        </View>
        <View style={{padding:5}}></View>
      </ScrollView>
    );
  }
}

// container of each news of news list
class IndexNewsBox extends Component {
  toContentPage(content, picUrl) {
    return () => {
      global.n.push({id:2, content: content, picUrl: picUrl });
    }
  }
  render() {
    let pic = {
      uri: this.props.picUrl
    };    
    return (
      <TouchableOpacity onPress={this.toContentPage(this.props.content, this.props.picUrl)}>
      <View>
        <Image source={pic} style={styles.indexImageStyle} resizeMode='cover' />
        <View style={styles.indexNewsBoxStyle}>
          <Text style={styles.titleStyle}>{this.props.title}</Text>
          <Text>{this.props.leading}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

// content page, the detail of the news
class ContentPage extends Component {
  render() {
    let pic = {
      uri: this.props.picUrl
    };
    return (
      <ScrollView style={styles.contentContainer}>
        <Image source={pic} style={styles.contentImageStyle} resizeMode='cover' />
        <Text>{this.props.content}</Text>
        <View style={{padding:10}}></View>
      </ScrollView>
    );
  }
}

BackAndroid.addEventListener('hardwareBackPress', function() {
  // if current page is ContentPage
  if (global.route.id==2) {
    // then go back
    global.n.pop();
    return true;
  }
  return false;
});



class AwesomeProject extends Component {
  _renderScene(route,navigator) {
    // assign navigator to global.n
    global.n = navigator;
    // and route to global.route
    global.route = route;
    // so they can be used in BackAndroid

    if (route.id==1) {
      return <IndexPage />
    } else if (route.id==2) {
      return <ContentPage content={route.content} picUrl={route.picUrl} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 1, content: '', picUrl: '' }}
        renderScene={this._renderScene} />
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    flex: 1,
  },
  contentContainer: {
    padding: 10
  },
  indexNewsBoxStyle: {
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
    marginBottom:5, 
    backgroundColor: '#FFFFFF',
  },
  indexImageStyle: {
    marginTop:5, 
    marginLeft:10,
    width:Dimensions.get('window').width-20, 
    height:200,
  },
  contentImageStyle: {
    width:Dimensions.get('window').width-20, 
    height:300,
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);