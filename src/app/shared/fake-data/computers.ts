
interface computer {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface gpu {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface ozu {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface cpu {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface motherboard {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface cooler {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface power {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface ssd {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface monitor {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface keyboard {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface mouse {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

interface others {
    status:number;
    name:string;
    img:string;
    price:number;
    category:number;
}

export const computers:computer[] = [
    {status:0,name:"Sharkoon ELITE SHARK CA300T White",img:"https://files.ox-sys.com/cache/300x_/image/23/67/9b/23679b12f87110447e213366dec5389dc4d7f75b5fbfd21c872281040331b8cd.jpg",price:1864900,category:1},
    {status:0,name:"Sharkoon REV200",img:"https://files.ox-sys.com/cache/300x_/image/1d/cc/af/1dccaf4da4782c3bc7231d896756e6006c64e42813138437d2fa8cf3a512d9d1.jpg",price:1118800,category:1},
    {status:1,name:"Sharkoon PURE STEEL RGB Black",img:"https://files.ox-sys.com/cache/300x_/image/a2/a9/f9/a2a9f99fbd2dcd875f5f97d5f7fe488f3d3cc266288b596d3c530526e084b7a0.jpg",price:1130400,category:1},
    {status:1,name:"Sharkoon TG6 RGB",img:"https://files.ox-sys.com/cache/300x_/image/16/39/04/163904549a379da7e068975b034147347d0b4d39af712251a08161157e42ef11.jpg",price:1051500,category:1},
    {status:0,name:"Sharkoon SK3 RGB",img:"https://files.ox-sys.com/cache/300x_/image/53/96/01/539601c4910cfab85e95eebeae41920c1d605c0f357b45bfeda2d54645b698d5.jpg",price:1243100,category:1},
    {status:1,name:"Sharkoon RGB LIT 100",img:"https://files.ox-sys.com/cache/300x_/image/d7/78/5d/d7785da8b3a0497260f50875aa3a361e0934611fcbfaf46b2ba8625cd6d6133b.jpg",price:429500,category:1},
    {status:1,name:"Sharkoon REV220",img:"https://files.ox-sys.com/cache/300x_/image/15/9c/b8/159cb884d9c579e399c4a9c5d2e471adc5e5a5efd7f10a2f6545c690221bf6e6.jpg",price:622000,category:1},
    {status:0,name:"Sharkoon REV100",img:"https://files.ox-sys.com/cache/300x_/image/9a/9e/b7/9a9eb760ba5abd753b1d942d7d48adfc4156d9b5b7576654f0fb3adc5b51078e.jpg",price:1118800,category:1},
    {status:1,name:"Sharkoon V1000 Window Black",img:"https://files.ox-sys.com/cache/300x_/image/be/3e/7b/be3e7b89226f360842b1269d709866a74feeead7d66b978e5083ba14991aa46e.jpg",price:655900,category:1},
    {status:0,name:"Sharkoon QB ONE Black",img:"https://files.ox-sys.com/cache/300x_/image/6c/1f/0f/6c1f0f3defd2d300736ec8d4b90f44489401899591e07109b744ffc888be56f1.jpg",price:531500,category:1},
    {status:0,name:"Sharkoon RGB FLOW",img:"https://files.ox-sys.com/cache/300x_/image/a0/03/b1/a003b1d6b3da9b7b6b927f3b27d1bf42e8d10b8bf98327da12501ad906855eab.jpg",price:508900,category:1},
    {status:0,name:"Sharkoon TG5 Pro RGB",img:"https://files.ox-sys.com/cache/300x_/image/97/ce/a8/97cea89cc45306bb7b9d8f10fb47ef2544419fe67a2d8d1fb40c83fdd7cbc728.jpg",price:599300,category:1},
];

export const gpus:gpu[] = [
    {status:1,name:"Gigabyte GeForce® GTX 1660 OC 6G",img:"https://files.ox-sys.com/cache/300x_/image/08/eb/a4/08eba4ee63af61bee1e1f8d147eda5d0f7f0e70744d581b0e1458c9b346273a2.png",price:5650400,category:1},
    {status:1,name:"Gigabyte GeForce RTX ™ 3070 Ti GAMING OC 8G",img:"https://files.ox-sys.com/cache/300x_/image/e6/88/13/e6881359d5fec7afda5473c978b249f43153128b37877a2004347c00cec33275.png",price:10735100,category:1},
    {status:1,name:"Gigabyte GeForce RTX™ 3050 Gaming OC 8G",img:"https://files.ox-sys.com/cache/300x_/image/b8/46/60/b8466054bcd3b1f343bc60455b17a725f4de748214d2dee2867d375d28653dcb.png",price:4859100,category:1},
    {status:1,name:"AORUS GeForce RTX™ 3060 ELITE 12G",img:"https://files.ox-sys.com/cache/300x_/image/93/8a/43/938a43a96c0689dedadb3aded45b915f99fdbca979a2939990df7156b76eb7b4.png",price:7345000,category:1},
    {status:1,name:"MSI Radeon RX 6900 XT GAMING Z TRIO 16G",img:"https://files.ox-sys.com/cache/300x_/image/dd/88/a5/dd88a596297debd92b31c73cdbe65167378a3db9682c9c68047cdb7c70ccbbf6.png",price:19210000,category:2},
    {status:1,name:"MSI AMD Radeon RX 6600 MECH 2X OC",img:"https://files.ox-sys.com/cache/300x_/image/05/e8/8b/05e88b24ac4a30f08f1822b079ded761044a33069e272f3601364c7e3c22e6e6.png",price:5876100,category:2},
    {status:1,name:"MSI Radeon RX 6600 Armor 8G",img:"https://files.ox-sys.com/cache/300x_/image/2d/50/0a/2d500a4e20e247280510b03f3268077ce302dd016852f9bf289b94e09e2b85dd.png",price:5876100,category:2},
    {status:1,name:"Palit GeForce RTX™ 3060 Dual OC",img:"https://files.ox-sys.com/cache/300x_/image/8e/aa/0d/8eaa0d108be6417bed4191d0091390acf61ae576e0b69a9707a287e57568d59e.png",price:6441100,category:3},
    {status:1,name:"Palit GeForce® 1050 Ti StormX",img:"https://files.ox-sys.com/cache/300x_/image/3e/28/b2/3e28b2d707f0181058d63f90d43fe1659cddf947100e5c3b3ae3fec4b38274f5.png",price:2655600,category:3},
    {status:1,name:"Palit GeForce RTX 3080 GamingPro 12G",img:"https://files.ox-sys.com/cache/300x_/image/2b/b1/0b/2bb10b81f2bf9dece9bc8eb32e79fcf56a2a5c606b02b09189c99c02c82993b2.png",price:14689900,category:3},
    {status:1,name:"Palit GeForce RTX™ 3090 GamingPro OC",img:"https://files.ox-sys.com/cache/300x_/image/a9/a3/57/a9a35790720f703ab144966d9c4f7a5cb14cf195deee9a2527d921c8d51902ec.png",price:27119900,category:3},
]

export const cpus:cpu[] = [
    {status:1,name:"Intel Core i3-10100F",img:"https://files.ox-sys.com/cache/300x_/image/6c/f5/fb/6cf5fb9e5a5f025434af633733bd9d504d3f14e6ebe142d2520b172a989a72fd.jpg",price:836300,category:1},
    {status:1,name:"Intel Core i7-10700",img:"https://files.ox-sys.com/cache/300x_/image/80/d9/36/80d936d060c4e0d0c39bfe5e3e3799be390431bdfb2f56355ea1f9a5aa994c26.jpg",price:3051100,category:1},
    {status:1,name:"Intel Core i5-12500 Box",img:"https://files.ox-sys.com/cache/300x_/image/ef/fe/82/effe8280e78f22f8e3d2698fd96806cffb236e5b46c543f8d835492e3814d990.jpg",price:2768600,category:1},
    {status:1,name:"Intel Core i3-12100F",img:"https://files.ox-sys.com/cache/300x_/image/ac/fe/33/acfe339b2bfd7cbabe02beadac06fb67d3c6b90374a0cc638023e7cc0b8babd7.jpg",price:1096200,category:1},
    {status:1,name:"Intel Core i7-11700K OEM",img:"https://files.ox-sys.com/cache/300x_/image/40/20/a0/4020a0116f0aa25209f2f3af2c605698bbeb27bc31e4567e45f3952a54ad67b7.jpg",price:3785500,category:1},
    {status:1,name:"AMD Ryzen 5 3600",img:"https://files.ox-sys.com/cache/300x_/image/d3/c1/79/d3c179335c79685fd2b34ff02d035a63d5930477f2de2697963d562f2c76882a.jpg",price:2825500,category:2},
    {status:1,name:"AMD Ryzen 7 5800X",img:"https://files.ox-sys.com/cache/300x_/image/d3/c1/79/d3c179335c79685fd2b34ff02d035a63d5930477f2de2697963d562f2c76882a.jpg",price:4859400,category:2},
    {status:1,name:"AMD Ryzen 5 5600X",img:"https://files.ox-sys.com/cache/300x_/image/d3/c1/79/d3c179335c79685fd2b34ff02d035a63d5930477f2de2697963d562f2c76882a.jpg",price:3616400,category:2},
    {status:1,name:"4 294 400",img:"https://files.ox-sys.com/cache/300x_/image/d3/c1/79/d3c179335c79685fd2b34ff02d035a63d5930477f2de2697963d562f2c76882a.jpg",price:3785500,category:2},
];

export const motherboards:motherboard[] = [
    {status:1,name:"GIGABYTE A520M DS3H",img:"https://files.ox-sys.com/cache/300x_/image/2f/64/c8/2f64c89456fa89ea0954e79b27326ca9ff830342bf0492c82ffe569325d1a6be.png",price:1017500,category:1},
    {status:1,name:"GIGABYTE A320M-H (rev. 1.1)",img:"https://files.ox-sys.com/cache/300x_/image/61/47/08/6147084a99419fcda11be285dc156c2af717d69e47e9ea2ea2954ae552a51cb3.png",price:712500,category:1},
    {status:1,name:"GIGABYTE GA-E6010N",img:"https://files.ox-sys.com/cache/300x_/image/08/12/40/081240f0159df39127b368f91c2296b949a002e3ae1f7a397c572e7ccd7d9e5a.png",price:565500,category:1},
    {status:1,name:"Gigabyte B550 AORUS PRO V2",img:"https://files.ox-sys.com/cache/300x_/image/b5/8e/48/b58e48337eb4a529d314c0f5aedead277e04929d667a2aac2b8bb389ff618a8b.png",price:2542900,category:1},
    {status:1,name:"MSI B550-A PRO",img:"https://files.ox-sys.com/cache/300x_/image/69/8d/b1/698db1cdf1c12e716f6d28a36a94eef8fd6621ec03a82ec521942919d71941a2.png",price:1808400,category:2},
    {status:1,name:"MSI MAG B550 TOMAHAWK",img:"https://files.ox-sys.com/cache/300x_/image/c1/64/0e/c1640e55d51c2a2173b3cc0bf5c594767abd3cd426d9af84e1ce5a7885d78984.png",price:2373400,category:2},
    {status:1,name:"MSI MAG B550M BAZOOKA",img:"https://files.ox-sys.com/cache/300x_/image/1d/16/bd/1d16bd84bc85bec529a75f67f63e177348cc4dbd25f0f2e1084c76f49687f984.png",price:1864900,category:2},
    {status:1,name:"MSI MEG X570 UNIFY",img:"https://files.ox-sys.com/cache/300x_/image/e3/b9/bb/e3b9bb9adb1ed16b57d3f82e5a4c9732e648875eb1c1afe332dfa943140ef1ba.png",price:4181500,category:2},
    {status:1,name:"ASRock B560 Steel Legend",img:"https://files.ox-sys.com/cache/300x_/image/19/bd/13/19bd13c182fe50e34e13a3a8ea90f5af228bdc8d310c23efee639064ecfcaba8.png",price:1864600,category:3},
    {status:1,name:"ASRock Z590 Pro4",img:"https://files.ox-sys.com/cache/300x_/image/63/83/77/63837747dd183cb68c49a7ea379d7cb86b28f50cb8fe14a287a0e14a90607b1c.png",price:2260100,category:3},
    {status:1,name:"ASRock H570 Steel Legend",img:"https://files.ox-sys.com/cache/300x_/image/1f/db/37/1fdb374fcf414417f084b631b7fbbc36dc48b5e9a7bd609effc0c9e5a030a436.png",price:2034500,category:3}
];

export const ozus:ozu[] = [
    {status:1,name:"Kingston Fury Beast DDR5 32GB (2*16GB 5200MHz)",img:"https://files.ox-sys.com/cache/300x_/image/83/39/f2/8339f2ae5b6a0696ed69107e179207de70e5766f2503d7f3f364118bcaff430f.jpg",price:3390400,category:1},
    {status:1,name:"Kingston Fury Beast DDR5 16GB (1*16GB 5600MHz",img:"https://files.ox-sys.com/cache/300x_/image/c5/37/09/c537092ee14916810afb6df3a235d00b3f1f7ecd3817b0a06e88517aaa4fd1a4.jpg",price:1864900,category:1},
    {status:1,name:"Kingston Fury Beast RGB 16GB (2*8GB 3200MHz CL16)",img:"https://files.ox-sys.com/cache/300x_/image/76/4d/b1/764db1e187fe5eb70ce13a77be8f8c8fdd9d482fa83287fa0ca6e5a98f978e45.jpg",price:972300,category:1},
    {status:1,name:"Aorus RGB 16GB (2*8GB 4400 MHz CL19)",img:"https://files.ox-sys.com/cache/300x_/image/89/6e/d7/896ed76b7d5939a95891298d98b93f5938a6c1640ab963f35ff3a0f7f74a4551.png",price:1582200,category:2},
    {status:1,name:"Gigabyte 8GB 2666 MHz CL16",img:"https://files.ox-sys.com/cache/300x_/image/fe/67/b9/fe67b9549ec7b3370c7305a1626e4958d7293f9f98640c1c0ecf886bc9862b2b.png",price:576900,category:2},
    {status:1,name:"Aorus RGB 16GB (2*8GB 3733MHz CL18)",img:"https://files.ox-sys.com/cache/300x_/image/46/b7/ad/46b7ad2efa2fadac986d7aa0a17a4dca3dbceeed9ff6258ddf95f55d305c15ae.png",price:1243200,category:2},
    {status:1,name:"Kingston HyperX FURY Black RGB Kit 32 GB 3000 MHz",img:"https://files.ox-sys.com/cache/300x_/image/34/29/6a/34296aba14c50faf50f03b5252afe6796a22409f3e2e262860a699c11ecc3306.jpg",price:2034500,category:3},
    {status:1,name:"HyperX Fury RGB 16GB 3000MHz",img:"https://files.ox-sys.com/cache/300x_/image/68/c9/26/68c926c240fb7138a1dcced2cc0a31eaa935eff4fab0d83cf52e85f852029050.jpg",price:1311300,category:3},
];

export const coolers:cooler[] = [
    {status:0,name:"ID-Cooling SE-914-XT ARGB",img:"https://files.ox-sys.com/cache/300x_/image/dc/b2/40/dcb240aebfc6fcaaf9b1146c374f04e9e71a7a2adc795c7cd61e6a094256b671.jpg",price:301600,category:1},
    {status:1,name:"ID-Cooling SE-224-XT White",img:"https://files.ox-sys.com/cache/300x_/image/39/2a/2b/392a2b8a89f32561c626fa33e592b5afb8d43e89fcca4779eebfcb0e0bd2e7ea.jpg",price:249000,category:1},
    {status:1,name:"ID-Cooling SE-224-XT RGB",img:"https://files.ox-sys.com/cache/300x_/image/16/7b/09/167b0964401da9a60e82ebfd3b6e4bba5b20d13d61747325d1f63cd2ab3f2bdf.jpg",price:339500,category:1},
    {status:0,name:"ID-Cooling SE-226-XT ARGB",img:"https://files.ox-sys.com/cache/300x_/image/1a/d6/16/1ad61676e975bbf01a08501fff1c6aefe798035097acc792eaf3a3033e577d2d.jpg",price:565100,category:1},
    {status:1582100,name:"DARK ROCK PRO 4",img:"https://files.ox-sys.com/cache/300x_/image/14/34/91/143491f665a2beb587c2c756f5d9c8202916e1e1c9dcc5b49f3c6fbffab6b882.jpg",price:642000,category:2},
    {status:1130100,name:"Be quiet! DARK ROCK 4 [BK021]",img:"https://files.ox-sys.com/cache/300x_/image/fa/86/51/fa86514ce4fe021b5b9bf7594c5ea29b48aee1c026d2409eb002ac24e163d8cc.jpg",price:1243000,category:2},
    {status:848000,name:"Be quiet! DARK ROCK SLIM (BK024)",img:"https://files.ox-sys.com/cache/300x_/image/b2/26/46/b22646d679f0a438192a5aa4d09a995f8ac9fe037cc7a50659c782e728b5779f.jpg",price:525000,category:2},
    {status:0,name:"MASTERAIR G100L",img:"https://files.ox-sys.com/cache/300x_/image/34/90/58/34905851f93d99502167679b1a5aba35be5ca0801cdebdb30a3473d2654988fe.jpg",price:280600,category:2},
];

export const powers:power[] = [
    {status:1,name:"Gigabyte P750GM 80 PLUS Gold",img:"https://files.ox-sys.com/cache/300x_/image/1a/34/78/1a3478244e799675e24fd2884e31fc6502621e2fe123e1e862215e4b605366f0.png",price:1243400,category:1},
    {status:1,name:"Gigabyte GP-P550B",img:"https://files.ox-sys.com/cache/300x_/image/f3/a3/ee/f3a3ee332fb62e89f0cbb3ebe48d0a0e0a4fee375b085d90886c7897f48c113e.png",price:599300,category:1},
    {status:1,name:"Gigabyte GP-P450B",img:"https://files.ox-sys.com/cache/300x_/image/bd/ad/51/bdad51753eb71f929ac96fe691d029e73f765e8167127abf1198f1ab8a761cae.png",price:486300,category:1},
    {status:1,name:"Super Flower Leadex 2000W Platinum",img:"https://files.ox-sys.com/cache/300x_/image/04/98/01/049801bf2639abb237abd3af5234df3dc6813f9cc193521f2aee738969f976e4.jpg",price:6809100,category:2},
    {status:1,name:"Super Flower Leadex III 750W Gold ARGB",img:"https://files.ox-sys.com/cache/300x_/image/d5/9f/d9/d59fd9dca22cfa22e320524053cafa0534bcbe5265dad53774a213ca5f2519fc.jpg",price:2023200,category:2},
    {status:1,name:"Super Flower Leadex SE 1000W Platinum",img:"https://files.ox-sys.com/cache/300x_/image/8a/38/5a/8a385a1dfa04ffe2b5c0a0cc04889cf18ae346a1bce2ab6bb4d8ab7c7bcf57b6.jpg",price:3012000,category:2},
];


export const ssd:ssd[] = [
    {status:1,name:"Samsung 970 Evo Plus 250GB M.2 NVMe",img:"https://files.ox-sys.com/cache/300x_/image/bd/b8/41/bdb841e7f971090306c009fbde5520936400845ffe3fdb8680c2abcdc656c373.jpeg",price:847700,category:1},
    {status:1,name:"Samsung 980 PRO 250GB M.2 NVMe",img:"https://files.ox-sys.com/cache/300x_/image/49/50/c9/4950c9f685c2d06513d2a0bf74565c46cd3f21052cb9d78f6ab516901a5c7964.jpeg",price:1017300,category:1},
    {status:1,name:"Samsung 970 Evo Plus 2TB M.2 NVMe",img:"https://files.ox-sys.com/cache/300x_/image/56/44/7e/56447e1a20d7120420a8d6e2e35790a12db9be8f3f587c553d86663c9c9c78b7.jpeg",price:3277000,category:1},
    {status:1,name:"Aorus RGB AIC 1TB",img:"https://files.ox-sys.com/cache/300x_/image/fe/9b/3d/fe9b3daf0e7a5da46a91b099d290c0b1c23fbe12627920bc102fe1fd4bd2520d.png",price:3616200,category:2},
    {status:1,name:"Aorus Gen4 SSD 500GB [GP-AG4500G]",img:"https://files.ox-sys.com/cache/300x_/image/12/04/9c/12049c4f5a8d896dfcf92e65ff8aff4adbe890b021364557a4b8c8c91ede5153.png",price:1130100,category:2},
    {status:1,name:"Aorus Gen4 7000s SSD 2TB [GP-AG70S2TB]",img:"https://files.ox-sys.com/cache/300x_/image/c6/eb/d7/c6ebd7dc052e7e6ecfdb245d5d194c5bce5057a916ad47d7cd4de5eac5d231a9.png",price:4294000,category:2},
    {status:1,name:"Toshiba 4TB",img:"https://files.ox-sys.com/cache/300x_/image/ed/5b/f6/ed5bf6d5f89834372210582f9bab2b21a1685a6b3d8538b66309484c59a8bd87.jpg",price:1186900,category:3},
    {status:1,name:"Toshiba 2TB",img:"https://files.ox-sys.com/cache/300x_/image/89/67/fc/8967fc869e1618f09e5835b822e4521a753791aac1f684b15e89212b6a88fe5a.jpg",price:675600,category:3},
    {status:1,name:"Toshiba 1TB",img:"https://files.ox-sys.com/cache/300x_/image/2f/d7/09/2fd7090763ac9ce181bd2b6e1200d5feb37b99f2a06be1fa28811b501b6a983e.jpg",price:486400,category:3}
];

export const monitor:monitor[] = [
    {status:1,name:"MSI Optix MAG251RX",img:"https://files.ox-sys.com/cache/300x_/image/41/ad/4a/41ad4a2726d60fc8312ff5bf2823f950dc04763d11a85fb708e733d345def0fc.png",price:5424300,category:1},
    {status:1,name:"MSI Pro MP271",img:"https://files.ox-sys.com/cache/300x_/image/8d/d9/6a/8dd96a49301731c993e7e7cb080d89daaf10faec2b764f099ae2cdb472310190.png",price:3051500,category:1},
    {status:1,name:"MSI Optix G27CQ4",img:"https://files.ox-sys.com/cache/300x_/image/3e/a9/30/3ea9306e7f6a3d0c43bfcd85c1f4b40170458a30070ec204624ae68a24355937.png",price:5311400,category:1},
    {status:1,name:"Samsung Odyssey C24RG50FQI",img:"https://files.ox-sys.com/cache/300x_/image/8d/4d/32/8d4d3292ecedaaa54f6bb9ef44182c9a450207603a0f54dc3c900e029b4ac4ba.PNG",price:2712100,category:2},
    {status:1,name:"Samsung Odyssey G7 [C27G75TQSN]",img:"https://files.ox-sys.com/cache/300x_/image/db/8a/ba/db8abac1f6e91f3a431c73dd90ca83bd93a11674d748b8419dd0a74fd75959d1.jpeg",price:9209800,category:2},
    {status:1,name:"Samsung Odyssey G7 [C32G75TQSN]",img:"https://files.ox-sys.com/cache/300x_/image/3a/bf/11/3abf11e6b2e03fb6248e9371ebadf8f21fc303e5d6a1aad5f03350857692e190.jpg",price:10057200,category:2},
    {status:1,name:"PIXEL PXG27FHD-PRO",img:"https://files.ox-sys.com/cache/300x_/image/33/29/3f/33293fcca56d5749c953221f7f704862d9490b3ea3f7b8a74d0cec79886615ed.jpg",price:2882000,category:3},
    {status:1,name:"PIXEL PXG24FHD-PRO",img:"https://files.ox-sys.com/cache/300x_/image/d3/2e/08/d32e08e2dc2e2cc6c0e6d25f0fc9591605d2506d1c96f2cd1f05e5568175a7da.jpg",price:2090600,category:3},
    {status:1,name:"Pixel PXB22",img:"https://files.ox-sys.com/cache/300x_/image/03/98/b2/0398b2e5845c10610032638a1f4e6abee872247df7921e1f47aef63706d5afcd.png",price:1130100,category:3}
];

export const keyboard:keyboard[] = [
    {status:1,name:"VA108M CMYK, Cherry MX Black",img:"https://files.ox-sys.com/cache/300x_/image/9d/73/f1/9d73f190484e2d5ddb3e31d6adb12f9cb09416a96e5adb34e7a213b89b3d969d.jpg",price:2126200,category:1},
    {status:1,name:"Varmilo VA108M Sakura, Cherry MX Silent Red",img:"https://files.ox-sys.com/cache/300x_/image/57/c6/ed/57c6edd7b5de4ffb90fb42aa1c519c2a6f0c90a0db0f248524ab632742b3d263.jpg",price:2316900,category:1},
    {status:1,name:"Varmilo VA108M Moonlight, Cherry MX Silent Red",img:"https://files.ox-sys.com/cache/300x_/image/35/66/b5/3566b512969a71300b8621f95800fafa1de55bd5f7f5b40e2f5fcbe538200029.jpg",price:2316900,category:1},
    {status:1,name:"MSI Vigor GK50 Low Profile",img:"https://files.ox-sys.com/cache/300x_/image/06/ed/3e/06ed3efdde597bfc0214e71b931453b2e31b19dab82476d93504e610d1f6bb82.png",price:1124400,category:2},
    {status:1,name:"MSI Vigor GK50 Elite LL RU",img:"https://files.ox-sys.com/cache/300x_/image/f9/fb/af/f9fbafe7546f9d9bd846d73e17b57541f273a738702b73dba023d2bb861251a3.png",price:1017500,category:2},
    {status:1,name:"MSI Vigor GK20 RU",img:"https://files.ox-sys.com/cache/300x_/image/e9/b1/40/e9b1402bbad49b42e50b9ba1fbb2cb6b5354e5e733599e9326d15f685b13aa7c.png",price:316800,category:2},
    {status:1,name:"Redragon Shiva",img:"https://files.ox-sys.com/cache/300x_/image/a5/9b/6a/a59b6a3ed0f2907c6dda2dbbdbe5087c034ad6f591ee776f8be0c088478d6412.png",price:249000,category:3},
    {status:1,name:"Redragon Dyaus",img:"https://files.ox-sys.com/cache/300x_/image/d8/91/ba/d891ba7c8df7cd26b62f618fa759ee11d168638b09a23351e2479b89cb382c41.png",price:226400,category:3},
    {status:1,name:"Redragon Combo S107",img:"https://files.ox-sys.com/cache/300x_/image/7c/26/30/7c2630fe58fe76665a6087ecf824d9e7083f79c4049006b736ecc7f9935fac2a.png",price:316800,category:3},
];

export const mouse:mouse[] = [
    {status:1,name:"SteelSeries Rival 650 Wireless",img:"https://files.ox-sys.com/cache/300x_/image/ec/9c/dd/ec9cdd7e7b12c1f0e477fc44778d57ef79cf7da98f0c4424229e859725058bd3.png",price:1455900,category:1},
    {status:1,name:"SteelSeries Rival 500",img:"https://files.ox-sys.com/cache/300x_/image/91/e5/81/91e581459438ae06d2701375d2e55e7c98212f3148596ba585abde687d0da1ae.png",price:809200,category:1},
    {status:1,name:"SteelSeries Sensei 310 Ambidextrous",img:"https://files.ox-sys.com/cache/300x_/image/a0/27/f2/a027f27c49b8831a0c47e3914cadce8db31cb83e1826ba645be867994c0e7153.png",price:573300,category:1},
    {status:1,name:"Glorious Model O Glossy White",img:"https://files.ox-sys.com/cache/300x_/image/4b/27/3a/4b273a00eaca9843736508780d498ee7297aa0d2f4306fbdaaa40f7172ecc0e3.png",price:719300,category:2},
    {status:1,name:"Glorious Model O Glossy Black",img:"https://files.ox-sys.com/cache/300x_/image/ef/2a/f5/ef2af5a354ddf6f154ac7703b64dfdfbd484a335dcf6dc216744f4986c666ec8.png",price:712400,category:2},
    {status:1,name:"Glorious Model D Glossy White",img:"https://files.ox-sys.com/cache/300x_/image/f8/f5/5d/f8f55debfa315a21f3a49c7db324bffc0c2ee6eb4f1f6c66e199a03476e884e5.jpg",price:678500,category:2},
    {status:1,name:"RX-510SW",img:"https://files.ox-sys.com/cache/300x_/image/db/f4/32/dbf432bd541ac5feb1faf81095560742683a07da316c9b056adb961dfe056e7e.jpg",price:79700,category:3},
    {status:1,name:"RX-G970",img:"https://files.ox-sys.com/cache/300x_/image/52/38/0a/52380a2e3a3f1ddf176b096e68ae3d77d51a5c61a05014c5efccfd8118a26a55.png",price:181300,category:3},
    {status:1,name:"RX-G955",img:"https://files.ox-sys.com/cache/300x_/image/3c/02/71/3c0271678f070ac2e6b10a90b0df655b48478948c82666773fc056a5fb309d17.png",price:170100,category:3}
];



export const others:others[] = [
    {status:1,name:"Noblechairs EPIC Series Mercedes-AMG",img:"https://files.ox-sys.com/cache/300x_/image/14/81/e3/1481e35fd9aac351f707c7d7990b7b3795aed9acffca4a85e1387a3a8dea90f5.jpg",price:6780300,category:1},
    {status:1,name:"Noblechairs HERO Black",img:"https://files.ox-sys.com/cache/300x_/image/ff/39/60/ff39608dd70eca3c5e90f52f62e0bfc2c3b56168ce4ca20810f729a40d2fab66.jpg",price:5763400,category:1},
    {status:1,name:"Noblechairs EPIC Black/Gold",img:"https://files.ox-sys.com/cache/300x_/image/05/14/ae/0514ae9567b0f65199d1c8e2284424afbfc66c73d3c214be5193d17d541a0a33.jpg",price:4972400,category:1},
    {status:1,name:"Sharkoon Elbrus 3 Black/White",img:"https://files.ox-sys.com/cache/300x_/image/a9/79/80/a97980911925a2cd1f085ef492fb9eab7b2fffbad938a6e414c0449ad11c139d.PNG",price:3672700,category:1},
    {status:1,name:"Sharkoon Elbrus 2 Black/Red",img:"https://files.ox-sys.com/cache/300x_/image/cd/0e/08/cd0e081b27af3632f385e60a67e38ac96662866eaf8285b541e0800611e7d8b1.PNG",price:2938400,category:1},
    {status:1,name:"Sharkoon Skiller SGS40 Black",img:"https://files.ox-sys.com/cache/300x_/image/d3/b2/21/d3b221a97638470161a87c2f0137e9df94bee6e2a084fe2e50114517fb4e00ae.PNG",price:3938400,category:1},
    {status:1,name:"Sharkoon Skiller SGS2 Black/Green",img:"https://files.ox-sys.com/cache/300x_/image/9c/2c/73/9c2c7364e8b27db4a93cc9797d64a3122a77584c2b437a5f795c2c10567fc356.PNG",price:2667400,category:1},
    {status:1,name:"Sharkoon Skiller SGS4 Black/Red",img:"https://files.ox-sys.com/cache/300x_/image/80/80/a6/8080a6c685efbb9ae47396183bbc345e5ccf0eb0dc3e9fcf0811f978ba74dcdd.PNG",price:4237200,category:1},
    {status:1,name:"Sharkoon Elbrus 2 Black/Blue",img:"https://files.ox-sys.com/cache/300x_/image/07/30/f7/0730f74ac9e273cb757dc0c6d59b79ff5c3c26abfc6d7707b3e8b5bc542feb40.PNG",price:2795600,category:1},
    {status:1,name:"Aerocool ADMIRAL Smoky Black",img:"https://files.ox-sys.com/cache/300x_/image/f5/ff/eb/f5ffeba6a09488c626eb7b68b527de0fa17090de9bb3cb47384943fb23c8d624.jpg",price:2689900,category:1},
    {status:1,name:"Aerocool ADMIRAL Ice Blue",img:"https://files.ox-sys.com/cache/300x_/image/79/7b/19/797b198431ebb1fe2ad57d8d9ab7e366e4a99342991d044321ad92436d6ae7f0.PNG",price:2689900,category:1},
    {status:1,name:"Aerocool Knight Iron Black",img:"https://files.ox-sys.com/cache/300x_/image/05/ce/0e/05ce0e3f5ac70e3b28c4ef94a7d15299edb037b4ef8ff90cf4ee887ee9a2e7a5.png",price:2791500,category:1},
    {status:1,name:"PlayStation 5",img:"https://files.ox-sys.com/cache/300x_/image/c9/3a/b3/c93ab313f94ea1c4e5a1446bee70e9a8e2dbe7ef9aea0c86ea5bf78a48bf84e6.png",price:9040100,category:2},
    {status:1,name:"PlayStation 5 Digital Edition",img:"https://files.ox-sys.com/cache/300x_/image/86/e3/fc/86e3fc178267ce83c67d6dccb6ce8394c54159d0a26eb0933b5da49eca85211d.png",price:8701100,category:2},
    {status:1,name:"TP-LINK Archer C24",img:"https://files.ox-sys.com/cache/300x_/image/e4/75/ac/e475acfc7d29c02afc0bf944f7d252b7dfe0453cf62859c65fa8be1f0993fe35.jpg",price:305600,category:3},
    {status:1,name:"TP-LINK Archer C54",img:"https://files.ox-sys.com/cache/300x_/image/34/f6/a7/34f6a71bb259b886b7fe6b41be80423d5409967f553f6db148fb5959c91e8db3.jpg",price:362100,category:3},
];


