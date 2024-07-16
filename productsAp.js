const products = [
    {
        "id": 1,
        "name":" INTEL CORE i5-14400 4.7GHz",
        "price": 15800,
        "image": "images/1.jpg",
        "description": "Experience unparalleled speed with the Intel Core i5-14400F processor. Clocking at 4.7GHz on the LGA 1700 platform, it delivers blazing-fast performance for your computing tasks. Upgrade your system for seamless multitasking and immersive gaming."
    },
    {
        "id": 2,
        "name":" INTEL CORE i7-12700 4.90GHz",
        "price": 16800,
        "image": "images/2.jpg",
        "description": "Experience unparalleled speed with Intel Core i7-12700 processor. Boasting a 4.9GHz clock speed and DDR4 support, it's the pinnacle of performance for LGA1700 sockets. Turbocharge your computing experience with this powerhouse CPU!"
    },
    {

        "id": 3,
        "name":" INTEL CORE i5-13400 2.50GHz",
        "price": 15300,
        "image": "images/3.jpg",
        "description": "Experience VR-ready performance with the Intel Core i5-13400 Raptor Lake processor. LGA 1700 socket, 2.50GHz clock speed. Elevate your desktop to new heights with this efficient and powerful CPU, delivering seamless multitasking and immersive VR capabilities."
    },
    {
        "id": 4,
        "name":" INTEL CORE i3-14100F 4.7GHz",
        "price": 9200,
        "image": "images/4.jpg",
        "description": "Maximize your computing power with the Intel Core i3-14100F. Clocking at 4.7GHz, this LGA 1700 processor offers seamless multitasking and swift responsiveness for your everyday computing needs. Upgrade to superior performance today."
    },
    {
        "id": 5,
        "name":" RYZEN 5 8600G AM5 DDR5 4.3GHz",
        "price": 14900,
        "image": "images/5.jpg",
        "description": "Experience unparalleled speed with the AMD Ryzen 5 8600G processor. Boasting 4.3GHz, AM5 compatibility, and DDR5 support, it redefines performance. Elevate your computing with this high-speed processor, delivering seamless multitasking and impressive gaming capabilities."
    },
    {
        "id": 6,
        "name":" RYZEN 7 5700X AM4 3.7GHz",
        "price": 10400,
        "image": "images/6.jpg",
        "description": "Unleash ultimate performance with the AMD Ryzen 7 5700X Processor. Socket AM4, 3.7GHz base clock, and multi-core prowess ensure seamless multitasking and gaming. Elevate your computing experience with this high-speed processor, designed for power and efficiency in the modern era."
    },
    {
        "id": 7,
        "name":" RYZEN 5 7600X AM5 D5 4.7GHz",
        "price": 14300,
        "image": "images/7.jpg",
        "description": "Unleash peak performance with AMD Ryzen 5 7600X. LGA AM5 compatibility and a blazing 4.7GHz clock speed redefine speed and efficiency for your computing needs. Elevate your system with this powerhouse processor, delivering seamless multitasking and gaming."
    },
    {
        "id": 8,
        "name":" RYZEN 7 7700X AM5 D5 4.5GHz",
        "price": 21900,
        "image": "images/8.jpg",
        "description": "Unleash the power of AMD RYZEN 7 7700X LGA AM5 D5 processor! Clocking at 4.5GHz, this powerhouse comes equipped with Radeon Graphics for stunning visuals. Elevate your computing experience with speed, precision, and seamless graphics. Upgrade to excellence!"
    },
    {
        "id": 9,
        "name":" Msi NVIDIA® GeForce RTX 3050 Ventus 2X OC 8gb 128bit GDdr6 Gaming Videocard LHR",
        "price": 15200,
        "image": "images/gpu1.jpg",
        "description": "Experience superior gaming with MSI RTX 3050 Ventus 2X OC 8GB graphics card. Powered by 128-bit GDDR6 memory, it delivers stunning visuals and smooth gameplay. LHR technology ensures efficient mining performance. Upgrade your gaming rig for an immersive experience!"
    },
    {
        "id": 10,
        "name":" Msi NVIDIA® GeForce RTX 3050 Ventus 2X OC 8gb 128bit GDdr6 Gaming Videocard LHR",
        "price": 18800,
        "image": "images/gpu2.jpg",
        "description": "Experience superior gaming with MSI RTX 3050 Ventus 2X OC 8GB graphics card. Powered by 128-bit GDDR6 memory, it delivers stunning visuals and smooth gameplay. LHR technology ensures efficient mining performance. Upgrade your gaming rig for an immersive experience!"
    },
    {

        "id": 11,
        "name":"MSI NVIDIA® GeForce RTX 4060TI Ventus 3X OC 8G 128bit GDDR6 Videocard",
        "price": 27700,
        "image": "images/gpu3.jpg",
        "description": "Elevate your gaming experience with MSI RTX 4060Ti Ventus 3X OC. Equipped with 8GB GDDR6 memory on a 128-bit interface, this graphics card delivers outstanding performance. The Ventus 3X cooling design ensures efficient heat dissipation for a smooth gaming journey. "
    },
    {
        "id": 12,
        "name":" Gigabyte Rx 6600 Eagle GV-R66EAGLE-8GD 8gb 128bit GDdr6, WINDFORCE",
        "price": 13000,
        "image": "images/gpu9.jpg",
        "description": "Experience next-level gaming with Gigabyte RX 6600 Eagle. Boasting 8GB GDDR6, 128-bit memory interface, and WINDFORCE 3X Cooling, it ensures superior performance and thermal efficiency. Elevate your gaming setup with this powerhouse!"
    },
    {
        "id": 13,
        "name":" Galax RTX 4060 8GB 1-Click OC 2X V2 Dual Fan NVIDIA® GeForce Experience™ (46NSL8MD9NXV) ",
        "price": 18300,
        "image": "images/gpu5.jpg",
        "description": "Dominate gaming with Galax RTX 4060 8GB 1-Click OC 2X V2. Featuring 128-bit GDDR6 and dual-fan cooling, it ensures exceptional performance and thermal efficiency. Elevate your gaming experience with this powerhouse video card!"
    },
    {
        "id": 14,
        "name":" GALAX NVIDIA® GeForce RTX 3050 EX 1-Click OC 35NRLDMD9OEX 6GB 96-Bit GDDR6  ",
        "price": 12000,
        "image": "images/gpu6.jpg",
        "description": "Elevate your gaming with the GALAX GeForce RTX™ 3050 EX. Featuring 6GB GDDR6, a 96-Bit interface, and cutting-edge technology, it delivers immersive graphics for a superior gaming experience. Unleash the power of this videocard for stunning visuals and smooth gameplay."
    },
    {
        "id": 15,
        "name":" Palit NVIDIA® NVIDIA® GeForce RTX 3050 StormX 6GB NE63050018JE-1070F 96-bit GDDR6 ",
        "price": 3300,
        "image": "images/gpu7.jpg",
        "description": "Dominate your gaming arena with Palit RTX 3050 StormX. Boasting 6GB GDDR6, a 96-bit interface, and compact design, this videocard delivers impressive performance. Experience visuals like never before with Palit's cutting-edge technology."
    },
    {
        "id": 16,
        "name":" Gigabyte NVIDIA® GeForce RTX 3060 Gaming OC LHR R2.0 192bit GDdr6 Gaming Videocard RGB",
        "price": 19400,
        "image": "images/gpu8.jpg",
        "description": "Elevate your gaming setup with the MSI RTX 3060 Gaming OC. This graphics card boasts 8GB GDDR6, a 128-bit interface, and slim design for optimal performance and aesthetics. Immerse yourself in superior graphics and style with this powerhouse."
    },
    {
        "id": 17,
        "name":" Asus TUF B760M-PLUS WIFI socket LGA 1700",
        "price": 11800,
        "image": "images/Mobo1.jpg",
        "description": "The Asus TUF B760M-PLUS WIFI motherboard, compatible with LGA 1700 CPUs, boasts DDR4 support and robust features. Built for durability and performance, it's your reliable choice for a powerful and future-proof PC build with added wireless connectivity convenience."
    },
    {
        "id": 18,
        "name":" MSI B650M Project zero socket AM5 DDR5",
        "price": 15800,
        "image": "images/Mobo2.jpg",
        "description": "Elevate your build with the MSI B650M Project Zero Motherboard. Featuring AM5 socket and DDR5 support, it's a powerhouse for high-speed performance. Unleash innovation and reliability, ideal for gamers and content creators seeking cutting-edge technology in a compact form factor."
    },
    {

        "id": 19,
        "name":" Msi PRO H610M-G WIFI Socket LGA 1700",
        "price": 5700,
        "image": "images/Mobo3.jpg",
        "description": "Experience VR-ready performance with the Intel Core i5-13400 Raptor Lake processor. LGA 1700 socket, 2.50GHz clock speed. Elevate your desktop to new heights with this efficient and powerful CPU, delivering seamless multitasking and immersive VR capabilities."
    },
    {
        "id": 20,
        "name":" ASUS Prime B760M-A WIFI D4 Socket LGA 1700 Ddr4",
        "price": 8700,
        "image": "images/Mobo4.jpg",
        "description": "The ASUS TUF B650M-PLUS WIFI D5 motherboard is a powerhouse for AM5 processors, featuring DDR5 memory support and integrated Wi-Fi. Built for durability, it offers exceptional performance for gaming and multitasking. Future-proof your PC setup with this reliable and high-speed motherboard."
    },
    {
        "id": 21,
        "name":" ASUS TUF B650M-PLUS wifi D5 AM5 DDR5",
        "price": 15300,
        "image": "images/Mobo5.jpg",
        "description": "Experience unparalleled speed with the AMD Ryzen 5 8600G processor. Boasting 4.3GHz, AM5 compatibility, and DDR5 support, it redefines performance. Elevate your computing with this high-speed processor, delivering seamless multitasking and impressive gaming capabilities."
    },
    {
        "id": 22,
        "name":" Gigabyte B650M Gaming-X AX AM5 DDR5 ",
        "price": 12000,
        "image": "images/Mobo6.jpg",
        "description": "The Gigabyte B650M Gaming-X AX motherboard is designed for AM5 processors and DDR5 memory. With gaming-focused features, it delivers reliable performance, advanced connectivity, and an immersive gaming experience for enthusiasts. Elevate your gaming rig with this high-quality motherboard."
    },
    {
        "id": 23,
        "name":" MSI A520m-A Pro AMD Am4 Ddr4 Micro-ATX PCB ",
        "price": 3300,
        "image": "images/Mobo7.jpg",
        "description": "The MSI A520M Pro AM4 DDR4 Micro-ATX Gaming Motherboard offers reliable performance. Perfect for budget gaming setups, it supports DDR4 memory and AMD AM4 processors. Upgrade for efficient multitasking, stable gaming, and a compact build. Ideal for users seeking a cost-effective and functional gaming motherboard."
    },
    {
        "id": 24,
        "name":" MSI Mag B550m Pro-Vdh WIFI mATX AM4 Ddr4 Gaming",
        "price": 6400,
        "image": "images/Mobo8.jpg",
        "description": "The MSI MAG B550M Pro-VDH WIFI mATX AM4 DDR4 Gaming Motherboard offers exceptional gaming performance and built-in Wi-Fi. Perfect for compact gaming setups. Upgrade for seamless multitasking, high-speed gaming, and reliable connectivity. Ideal for gamers seeking a powerful yet compact motherboard."
    },
    {
        "id": 34,
        "name":" Gstorm Phantom 3in1 120mm Chassis Fan w/Control Hub and Remote ARGB Black and White",
        "price": 495,
        "image": "images/peri2.jpg",
        "description": "Revitalize your PC cooling with Gstorm Phantom 3in1 120mm Chassis Fan. Unleash the power of ARGB in black and white. Control Hub and Remote included for customizable lighting. Elevate your setup with this sleek, high-performance cooling solution."
    },
    {

        "id": 35,
        "name":"RAKK LAM-ANG PRO MAX 87 Keys / RGB / Trimode / South Facing / Gasket Mount / Outemu Black",
        "price": 2700,
        "image": "images/peri3.jpg",
        "description": "Experience peak performance with the RAKK LAM-ANG PRO MAX Mechanical Keyboard. Boasting 87 keys, universal hotswap, RGB, and gasket mount for optimal responsiveness. Outfitted with Outemu Black switches, a TFT screen, and Cherry keycaps, this keyboard redefines precision and style for your gaming and typing needs. "
    },
    {
        "id": 36,
        "name":" Nexion KY-610 RGB Mechanical Hotswap Keyboard Black Hot Swappable 20 Running Lightning Mode",
        "price": 750,
        "image": "images/peri4.jpg",
        "description": "Experience superior gaming and typing with the Nexion KY-610 RGB Mechanical Hotswap Keyboard in sleek black. Customizable RGB lighting, hotswap switches, and a durable design make this keyboard a standout choice for enthusiasts. Elevate your performance and style with every keystroke."
    },
    {
        "id": 37,
        "name":" RAKK MAG-AN Trimode PAW3335 Lightweight 53g Gaming Mouse White",
        "price": 1300,
        "image": "images/peri5.jpg",
        "description": "Elevate your gaming with the RAKK MAG-AN Trimode PAW3335 Lightweight Gaming Mouse in White. Weighing just 53g, its agile design enhances speed and precision. Dominate the competition with customizable features and unrivaled performance."
    },
    {
        "id": 38,
        "name":" Logitech G102 Light Sync Black and White Gaming Mouse LIGHTSYNC RGB ",
        "price": 1000,
        "image": "images/peri6.jpg",
        "description": "Step into precision gaming with the Logitech G102 Light Sync Gaming Mouse. Sleek in black and white, it offers responsive control and customizable RGB lighting. Elevate your gameplay with this stylish and high-performance accessory."
    },
    {
        "id": 39,
        "name":"Nvision N2455PRO-B 100Hz IPS Panel 23.8inch Monitor Black",
        "price": 3900,
        "image": "images/peri7.jpg",
        "description": "Immerse yourself in superior visuals with the Nvision N2455PRO-B 23.8inch Monitor. Featuring a 100Hz IPS panel, it delivers smooth, vibrant images. The sleek black design adds elegance to any setup, making it ideal for work or entertainment. Elevate your viewing experience with precision and style."
    },
    {
        "id": 40,
        "name":" Samsung 24.0 inch 75Hz AMD FreeSync, IPS Panel Monitor with back light",
        "price": 4950,
        "image": "images/peri8.jpg",
        "description": "Experience brilliance with the Samsung LF24T350FHEXXP 24inch Monitor. Featuring a 75Hz refresh rate and AMD FreeSync, enjoy smooth visuals and responsive gaming. The sleek design enhances your workspace, delivering vibrant colors and sharp details. Elevate your viewing experience effortlessly."
    },

    {
        "id": 41,
        "name":"Ad-link HDMI 1.5 Meter Cable Redmesh",
        "price": 57,
        "image": "images/other1.jpg",
        "description": "Experience superior connectivity with Ad-link HDMI 1.5 Meter Cable Redmesh. This high-quality cable ensures flawless transmission of HD audio and video signals. Its durable build and redmesh design add both style and reliability to your setup. Enjoy seamless multimedia experiences with Ad-link HDMI Cable."
    },
    {
        "id": 42,
        "name":"Vga 5m Cable",
        "price": 200,
        "image": "images/other2.jpg",
        "description": "Upgrade your display setup with a high-quality VGA 5m Cable. This cable ensures a reliable and clear connection for your video needs, delivering crisp and vibrant visuals over an extended 5-meter distance. Enhance your viewing experience with this durable and efficient VGA cable."
    },
    {

        "id": 43,
        "name":"Edifier X5 Lite True Wireless Earphone White",
        "price": 2700,
        "image": "images/other3.jpg",
        "description": "Introducing Edifier X5 Lite True Wireless Earphones in elegant white. Enjoy untethered audio freedom with these stylish earbuds. Featuring touch controls and long battery life, immerse yourself in superior sound quality and convenience wherever you go. "
    },
    {
        "id": 44,
        "name":" Nexion KY-610 RGB Mechanical Hotswap Keyboard Black Hot Swappable 20 Running Lightning Mode",
        "price": 2250,
        "image": "images/other4.jpg",
        "description": "Best earphone for gaming that have built in Microphone and also have noise cancellation."
    },
    {
        "id": 45,
        "name":" Rakk Walna 2 RGB Mousepad",
        "price": 600,
        "image": "images/other6.jpg",
        "description": "Elevate your gaming with the RAKK MAG-AN Trimode PAW3335 Lightweight Gaming Mouse in White. Weighing just 53g, its agile design enhances speed and precision. Dominate the competition with customizable features and unrivaled performance."
    },
    {
        "id": 46,
        "name":" RAKK x ZION PARA PO! Extended Mousepad 900x400x4mm",
        "price": 960,
        "image": "images/other5.jpg",
        "description": "Immerse yourself in the vibrant world of gaming with the Rakk Walna 2 RGB Mousepad. Featuring customizable RGB lighting, smooth surface, and a non-slip base, it blends style with functionality. Elevate your gaming setup and enhance precision with this dynamic mousepad."
    },
    {
        "id": 47,
        "name":"DarkFlash C285P ATX Tempered Glass Side Panel Gaming PC Case Black",
        "price": 2800,
        "image": "images/other7.jpg",
        "description": "The DarkFlash C285P ATX Gaming PC Case in sleek black features tempered glass side panel for showcasing your build. Stylish design with ample space for components, making it perfect for gamers and enthusiasts. Enhance your gaming setup with this visually stunning and functional case."
    },
    {
        "id": 48,
        "name":" Fantech Aero Tempered Glass Side Panel Dust Filter CG80 with 4 RGB Fan Mid Tower Case White",
        "price": 2550,
        "image": "images/other8.jpg",
        "description": "Elevate your build with the Fantech Aero Mid Tower Case in pristine white. Combining style with functionality, it features optimal airflow and a sleek design. Upgrade your gaming setup with this high-performance case, ensuring a cool and stylish foundation for your PC build."
    }

];
export default products;
