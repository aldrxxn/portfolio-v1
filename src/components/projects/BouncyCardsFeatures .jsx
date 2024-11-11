import { motion } from "framer-motion";
// import "./projects.scss";
import "./card.scss"
const redirectSahabatHewan = () => {
  window.open("https://github.com/aldrxxn/sahabatHewan-deploy", "_blank");
};
const redirectSchematics = () => {
  window.open("https://schematics-its.com/", "_blank");
};
const redirectMore = () => {
  window.open("", "_blank");
};
const redirectMore2 = () => {
  window.open("/", "_blank");
};
const BounceCard = ({ className, children, backgroundColor, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
      style={{ backgroundColor }}
      onClick={onClick} // Tambahkan properti onClick di sini
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3
      className="mx-auto text-center text-3xl font-semibold"
      style={{ fontWeight: 900, fontSize: "28px", color: "white" }}
    >
      {children}
    </h3>
  );
};

export const BouncyCardsFeatures = () => {
  return (
    <section className="halo max-w-7xl py-12 text-slate-800">
      <div className="hai mb-4 grid grid-cols-12 gap-4 ">
        <BounceCard
          className="col-span-4"
          backgroundColor="#232323"
          onClick={redirectSahabatHewan}
        >
          <CardTitle color="text-white">Sahabat Hewan</CardTitle>
          <div
            className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[5deg]"
            style={{
              backgroundImage: "url(sahabatHewan.svg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </BounceCard>

        <BounceCard
          className="col-span-8 hover:bg-gradient-to-br from-red-100 via-green-100 to-blue-100"
          backgroundColor="#232323"
          onClick={redirectSchematics}
        >
          <div className="relative">
            <div
              className="absolute left-90 top-[-190px] translate-x-[250px] translate-y-[210px] rounded-t-2xl p-4 transition-transform duration-[1000ms]  group-hover:translate-y-[210px]"
              style={{
                // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 950ms", // Animasi perubahan transform
                backgroundImage: "url(sch.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "250px", // Mengubah lebar gambar
                height: "250px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>
          <div
            className="absolute top-2.5 translate-y-56 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-9 group-hover:rotate-[10deg]"
            style={{
              backgroundImage: "url(NPC.svg)",
              backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
              backgroundRepeat: "no-repeat",
              width: "120px", // Mengubah lebar gambar
              height: "120px", // Mengubah tinggi gambar
            }}
          ></div>

          <div className="relative">
            {/* <div className="absolute left-90 top-[50px] translate-y-96 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-x-[makin deket ke center (kiri)] group-hover:translate-y-12 group-hover:rotate-[30deg]"  */}
            <div
              className="absolute left-90 top-[-20px] translate-y-96 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-x-12 group-hover:translate-y-[90px] group-hover:rotate-[30deg]"
              style={{
                // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 450ms", // Animasi perubahan transform
                backgroundImage: "url(NLC.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "200px", // Mengubah lebar gambar
                height: "200px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>

          <div className="relative">
            <div
              className="absolute left-90 top-[20px] translate-x-[900px] rounded-t-2xl p-4 transition-transform duration-[400ms] group-hover:translate-x-[700px] group-hover:rotate-[-40deg]"
              style={{
                // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 450ms", // Animasi perubahan transform
                backgroundImage: "url(BST.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "200px", // Mengubah lebar gambar
                height: "200px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>

          <div className="relative">
            <div
              className="absolute left-90 top-[20px] translate-x-[-95px] rounded-t-2xl p-4 transition-transform duration-[100s] group-hover:translate-x-[600px] group-hover:rotate-[-20deg]"
              style={{
                // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 1000ms", // Animasi perubahan transform
                backgroundImage: "url(REEVA.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "70px", // Mengubah lebar gambar
                height: "70px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>

          <div className="relative">
            <div
              className="absolute left-90 top-[-190px] translate-x-[470px] rounded-t-2xl p-4 rotate-[180deg] transition-transform duration-[1000ms] group-hover:translate-y-[-50px]"
              style={{
                // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 550ms", // Animasi perubahan transform
                backgroundImage: "url(NLC.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "250px", // Mengubah lebar gambar
                height: "250px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>

          <div className="relative">
            <div
              className="absolute left-90 top-[-280px] translate-x-[230px] translate-y-[-1px] rounded-t-2xl p-4 rotate-[180deg] transition-transform duration-[1000ms] group-hover:translate-y-[90px]"
              style={{
                // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 550ms", // Animasi perubahan transform
                backgroundImage: "url(music.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "50px", // Mengubah lebar gambar
                height: "250px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>

          <div className="relative">
            <div
              className="absolute left-90 top-[-280px] translate-x-[600px] translate-y-[600px] rounded-t-2xl p-4 transition-transform duration-[1000ms] group-hover:translate-y-[500px]"
              style={{
                // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 550ms", // Animasi perubahan transform
                backgroundImage: "url(calculator.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "50px", // Mengubah lebar gambar
                height: "250px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>

          <div className="relative">
            <div
              className="absolute left-90 top-[-60px] translate-x-[100px] translate-y-[-50px] rotate-[40deg] rounded-t-2xl p-4 transition-transform duration-100 group-hover:translate-y-[-10px] group-hover:translate-x-[80px] group-hover:rotate-[180deg] group-hover:scale-[1.1]"
              style={{
                // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 450ms", // Animasi perubahan transform
                backgroundImage: "url(BST.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "90px", // Mengubah lebar gambar
                height: "90px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard
          className="col-span-8"
          backgroundColor="#232323"
          color="ffffff"
          onClick={redirectMore}
        >
          <CardTitle>More Website / Design Projects to Show</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-[210px] translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              Wanna be Here? Contact Me
            </span>
          </div>
          <div className="relative">
            <div
              className="absolute left-90 top-[-20px] translate-y-96 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-x-12 group-hover:translate-y-[60px] group-hover:rotate-[30deg]"
              style={{
                // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 450ms", // Animasi perubahan transform
                backgroundImage: "url(iphonefix.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "200px", // Mengubah lebar gambar
                height: "200px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>

          <div className="relative">
            <div
              className="absolute left-90 top-[20px] translate-x-[900px] rounded-t-2xl p-4 transition-transform duration-[400ms] group-hover:translate-x-[500px] group-hover:rotate-[-40deg]"
              style={{
                // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
                transition: "transform 450ms", // Animasi perubahan transform
                backgroundImage: "url(ipad.svg)",
                backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
                backgroundRepeat: "no-repeat",
                width: "200px", // Mengubah lebar gambar
                height: "200px", // Mengubah tinggi gambar
              }}
            ></div>
          </div>
        </BounceCard>
        <BounceCard
          className="col-span-4"
          backgroundColor="#232323"
          color="ffffff"
          onClick={redirectMore2}
        >
          <CardTitle>And finally this</CardTitle>
          <div
            className="absolute bottom-0 left-4 right-4 top-14 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
            style={{
              backgroundImage: "url(MAShop.svg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </BounceCard>
      </div>
    </section>
  );
};












// import { motion } from "framer-motion";
// import "./projects.scss";
// const redirectSahabatHewan = () => {
//   window.open("https://github.com/aldrxxn/sahabatHewan-deploy", "_blank");
// };
// const redirectSchematics = () => {
//   window.open("https://schematics-its.com/", "_blank");
// };
// const redirectMore = () => {
//   window.open("", "_blank");
// };
// const redirectMore2 = () => {
//   window.open("/", "_blank");
// };
// const BounceCard = ({ className, children, backgroundColor, onClick }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 0.95, rotate: "-1deg" }}
//       className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
//       style={{ backgroundColor }}
//       onClick={onClick} // Tambahkan properti onClick di sini
//     >
//       {children}
//     </motion.div>
//   );
// };

// const CardTitle = ({ children }) => {
//   return (
//     <h3
//       className="mx-auto text-center text-3xl font-semibold"
//       style={{ fontWeight: 900, fontSize: "28px", color: "white" }}
//     >
//       {children}
//     </h3>
//   );
// };

// export const BouncyCardsFeatures = () => {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
//       <div className="mb-4 grid grid-cols-12 gap-4 ">
//         <BounceCard
//           className="col-span-12 md:col-span-4"
//           backgroundColor="#232323"
//           onClick={redirectSahabatHewan}
//         >
//           <CardTitle color="text-white">Sahabat Hewan</CardTitle>
//           <div
//             className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[5deg]"
//             style={{
//               backgroundImage: "url(sahabatHewan.svg)",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//           ></div>
//         </BounceCard>

//         <BounceCard
//           className="col-span-12 md:col-span-8 hover:bg-gradient-to-br from-red-100 via-green-100 to-blue-100"
//           backgroundColor="#232323"
//           onClick={redirectSchematics}
//         >
//           <div className="relative">
//             <div
//               className="absolute left-90 top-[-190px] translate-x-[250px] translate-y-[210px] rounded-t-2xl p-4 transition-transform duration-[1000ms]  group-hover:translate-y-[210px]"
//               style={{
//                 // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 950ms", // Animasi perubahan transform
//                 backgroundImage: "url(sch.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "250px", // Mengubah lebar gambar
//                 height: "250px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>
//           <div
//             className="absolute top-2.5 translate-y-56 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-9 group-hover:rotate-[10deg]"
//             style={{
//               backgroundImage: "url(NPC.svg)",
//               backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//               backgroundRepeat: "no-repeat",
//               width: "120px", // Mengubah lebar gambar
//               height: "120px", // Mengubah tinggi gambar
//             }}
//           ></div>

//           <div className="relative">
//             {/* <div className="absolute left-90 top-[50px] translate-y-96 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-x-[makin deket ke center (kiri)] group-hover:translate-y-12 group-hover:rotate-[30deg]"  */}
//             <div
//               className="absolute left-90 top-[-20px] translate-y-96 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-x-12 group-hover:translate-y-[90px] group-hover:rotate-[30deg]"
//               style={{
//                 // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 450ms", // Animasi perubahan transform
//                 backgroundImage: "url(NLC.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "200px", // Mengubah lebar gambar
//                 height: "200px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute left-90 top-[20px] translate-x-[900px] rounded-t-2xl p-4 transition-transform duration-[400ms] group-hover:translate-x-[700px] group-hover:rotate-[-40deg]"
//               style={{
//                 // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 450ms", // Animasi perubahan transform
//                 backgroundImage: "url(BST.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "200px", // Mengubah lebar gambar
//                 height: "200px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute left-90 top-[20px] translate-x-[-95px] rounded-t-2xl p-4 transition-transform duration-[100s] group-hover:translate-x-[600px] group-hover:rotate-[-20deg]"
//               style={{
//                 // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 1000ms", // Animasi perubahan transform
//                 backgroundImage: "url(REEVA.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "70px", // Mengubah lebar gambar
//                 height: "70px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute left-90 top-[-190px] translate-x-[470px] rounded-t-2xl p-4 rotate-[180deg] transition-transform duration-[1000ms] group-hover:translate-y-[-50px]"
//               style={{
//                 // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 550ms", // Animasi perubahan transform
//                 backgroundImage: "url(NLC.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "250px", // Mengubah lebar gambar
//                 height: "250px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute left-90 top-[-280px] translate-x-[230px] translate-y-[-1px] rounded-t-2xl p-4 rotate-[180deg] transition-transform duration-[1000ms] group-hover:translate-y-[90px]"
//               style={{
//                 // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 550ms", // Animasi perubahan transform
//                 backgroundImage: "url(music.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "50px", // Mengubah lebar gambar
//                 height: "250px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute left-90 top-[-280px] translate-x-[600px] translate-y-[600px] rounded-t-2xl p-4 transition-transform duration-[1000ms] group-hover:translate-y-[500px]"
//               style={{
//                 // transform: 'rotate(180deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 550ms", // Animasi perubahan transform
//                 backgroundImage: "url(calculator.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "50px", // Mengubah lebar gambar
//                 height: "250px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute left-90 top-[-60px] translate-x-[100px] translate-y-[-50px] rotate-[40deg] rounded-t-2xl p-4 transition-transform duration-100 group-hover:translate-y-[-10px] group-hover:translate-x-[80px] group-hover:rotate-[180deg] group-hover:scale-[1.1]"
//               style={{
//                 // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 450ms", // Animasi perubahan transform
//                 backgroundImage: "url(BST.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "90px", // Mengubah lebar gambar
//                 height: "90px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>
//         </BounceCard>
//       </div>
//       <div className="grid grid-cols-12 gap-4">
//         <BounceCard
//           className="col-span-12 md:col-span-8"
//           backgroundColor="#232323"
//           color="ffffff"
//           onClick={redirectMore}
//         >
//           <CardTitle>More Website / Design Projects to Show</CardTitle>
//           <div className="absolute bottom-0 left-4 right-4 top-[210px] translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
//             <span className="block text-center font-semibold text-emerald-50">
//               Wanna be Here? Contact Me
//             </span>
//           </div>
//           <div className="relative">
//             <div
//               className="absolute left-90 top-[-20px] translate-y-96 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-x-12 group-hover:translate-y-[60px] group-hover:rotate-[30deg]"
//               style={{
//                 // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 450ms", // Animasi perubahan transform
//                 backgroundImage: "url(iphonefix.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "200px", // Mengubah lebar gambar
//                 height: "200px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute left-90 top-[20px] translate-x-[900px] rounded-t-2xl p-4 transition-transform duration-[400ms] group-hover:translate-x-[500px] group-hover:rotate-[-40deg]"
//               style={{
//                 // transform: 'rotate(270deg)', // Memutar elemen 270 derajat sebelum di-hover
//                 transition: "transform 450ms", // Animasi perubahan transform
//                 backgroundImage: "url(ipad.svg)",
//                 backgroundSize: "contain", // Menyesuaikan ukuran tanpa memotong
//                 backgroundRepeat: "no-repeat",
//                 width: "200px", // Mengubah lebar gambar
//                 height: "200px", // Mengubah tinggi gambar
//               }}
//             ></div>
//           </div>
//         </BounceCard>
//         <BounceCard
//           className="col-span-12 md:col-span-4"
//           backgroundColor="#232323"
//           color="ffffff"
//           onClick={redirectMore2}
//         >
//           <CardTitle>And finally this</CardTitle>
//           <div
//             className="absolute bottom-0 left-4 right-4 top-14 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
//             style={{
//               backgroundImage: "url(MAShop.svg)",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//           ></div>
//         </BounceCard>
//       </div>
//     </section>
//   );
// };
