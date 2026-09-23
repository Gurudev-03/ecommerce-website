import { PrismaClient, ProductStatus, SellerStatus, UserRole, UserStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting SuperCommerce seed...");

  // --------------------------------------------------
  // USERS
  // --------------------------------------------------

  const sellerUser = await prisma.user.upsert({
    where: {
      email: "seller@supercommerce.local",
    },
    update: {},
    create: {
      name: "SuperCommerce Seller",
      email: "seller@supercommerce.local",
      passwordHash: "DEMO_PASSWORD_HASH",
      role: UserRole.SELLER,
      status: UserStatus.ACTIVE,
      emailVerified: true,
    },
  });

  const seller = await prisma.seller.upsert({
    where: {
      userId: sellerUser.id,
    },
    update: {
      status: SellerStatus.APPROVED,
    },
    create: {
      userId: sellerUser.id,
      storeName: "SuperCommerce Official",
      slug: "supercommerce-official",
      description:
        "Official SuperCommerce marketplace store with quality products across multiple categories.",
      status: SellerStatus.APPROVED,
      rating: 4.8,
    },
  });

  console.log("✅ Seller created");

  // --------------------------------------------------
  // CATEGORIES
  // --------------------------------------------------

  const categoryData = [
    {
      name: "Mobiles",
      slug: "mobiles",
      description: "Smartphones and mobile devices",
      imageUrl: "https://placehold.co/800x500?text=Mobiles",
    },
    {
      name: "Electronics",
      slug: "electronics",
      description: "Electronic devices and accessories",
      imageUrl: "https://placehold.co/800x500?text=Electronics",
    },
    {
      name: "Fashion",
      slug: "fashion",
      description: "Clothing, footwear and fashion accessories",
      imageUrl: "https://placehold.co/800x500?text=Fashion",
    },
    {
      name: "Home & Kitchen",
      slug: "home-kitchen",
      description: "Everything for your home and kitchen",
      imageUrl: "https://placehold.co/800x500?text=Home+Kitchen",
    },
    {
      name: "Beauty",
      slug: "beauty",
      description: "Beauty and personal care products",
      imageUrl: "https://placehold.co/800x500?text=Beauty",
    },
    {
      name: "Gaming",
      slug: "gaming",
      description: "Gaming consoles, accessories and gear",
      imageUrl: "https://placehold.co/800x500?text=Gaming",
    },
    {
      name: "Sports",
      slug: "sports",
      description: "Sports equipment and accessories",
      imageUrl: "https://placehold.co/800x500?text=Sports",
    },
    {
      name: "Audio",
      slug: "audio",
      description: "Headphones, earbuds and speakers",
      imageUrl: "https://placehold.co/800x500?text=Audio",
    },
    {
      name: "Wearables",
      slug: "wearables",
      description: "Smart watches and fitness trackers",
      imageUrl: "https://placehold.co/800x500?text=Wearables",
    },
    {
      name: "Accessories",
      slug: "accessories",
      description: "Everyday technology accessories",
      imageUrl: "https://placehold.co/800x500?text=Accessories",
    },
  ];

  const categories: Record<string, string> = {};

  for (const data of categoryData) {
    const category = await prisma.category.upsert({
      where: {
        slug: data.slug,
      },
      update: data,
      create: data,
    });

    categories[data.slug] = category.id;
  }

  console.log("✅ Categories created");

  // --------------------------------------------------
  // PRODUCTS
  // --------------------------------------------------

  const products = [
    {
      name: "Nova X Pro 5G Smartphone",
      slug: "nova-x-pro-5g",
      category: "mobiles",
      brand: "Nova",
      description:
        "Premium 5G smartphone with a high-resolution display, powerful processor and advanced camera system.",
      basePrice: 39999,
      salePrice: 32999,
      rating: 4.7,
      reviewCount: 1284,
      salesCount: 892,
      isFeatured: true,
      isFlashSale: true,
      sku: "NOVA-X-PRO-256",
      stock: 75,
      image: "https://placehold.co/800x800?text=Nova+X+Pro",
    },
    {
      name: "PixelMax Ultra 5G",
      slug: "pixelmax-ultra-5g",
      category: "mobiles",
      brand: "PixelMax",
      description:
        "Flagship-inspired smartphone with a bright AMOLED display and long-lasting battery.",
      basePrice: 44999,
      salePrice: 36999,
      rating: 4.6,
      reviewCount: 947,
      salesCount: 634,
      isFeatured: true,
      isFlashSale: false,
      sku: "PIXELMAX-ULTRA",
      stock: 42,
      image: "https://placehold.co/800x800?text=PixelMax+Ultra",
    },
    {
      name: "AeroBook 14 Laptop",
      slug: "aerobook-14-laptop",
      category: "electronics",
      brand: "Aero",
      description:
        "Slim everyday laptop designed for productivity, study and entertainment.",
      basePrice: 69999,
      salePrice: 58999,
      rating: 4.5,
      reviewCount: 623,
      salesCount: 410,
      isFeatured: true,
      isFlashSale: true,
      sku: "AEROBOOK-14",
      stock: 25,
      image: "https://placehold.co/800x800?text=AeroBook+14",
    },
    {
      name: "UltraView 27 4K Monitor",
      slug: "ultraview-27-4k-monitor",
      category: "electronics",
      brand: "UltraView",
      description:
        "27-inch 4K monitor with sharp visuals for creators, gamers and professionals.",
      basePrice: 39999,
      salePrice: 31999,
      rating: 4.6,
      reviewCount: 351,
      salesCount: 219,
      isFeatured: true,
      isFlashSale: false,
      sku: "UV-27-4K",
      stock: 31,
      image: "https://placehold.co/800x800?text=4K+Monitor",
    },
    {
      name: "AirBeat Pro Wireless Earbuds",
      slug: "airbeat-pro-earbuds",
      category: "audio",
      brand: "AirBeat",
      description:
        "Wireless earbuds with active noise cancellation and a compact charging case.",
      basePrice: 7999,
      salePrice: 4999,
      rating: 4.4,
      reviewCount: 2150,
      salesCount: 1542,
      isFeatured: true,
      isFlashSale: true,
      sku: "AIRBEAT-PRO",
      stock: 180,
      image: "https://placehold.co/800x800?text=AirBeat+Pro",
    },
    {
      name: "BoomBox Mini Bluetooth Speaker",
      slug: "boombox-mini-speaker",
      category: "audio",
      brand: "BoomBox",
      description:
        "Portable Bluetooth speaker with powerful sound and long battery life.",
      basePrice: 4999,
      salePrice: 2999,
      rating: 4.3,
      reviewCount: 842,
      salesCount: 725,
      isFeatured: false,
      isFlashSale: true,
      sku: "BOOMBOX-MINI",
      stock: 95,
      image: "https://placehold.co/800x800?text=BoomBox+Mini",
    },
    {
      name: "PulseFit Smart Watch",
      slug: "pulsefit-smart-watch",
      category: "wearables",
      brand: "PulseFit",
      description:
        "Smart watch with activity tracking, notifications and health-focused features.",
      basePrice: 9999,
      salePrice: 6499,
      rating: 4.5,
      reviewCount: 1330,
      salesCount: 920,
      isFeatured: true,
      isFlashSale: true,
      sku: "PULSEFIT-1",
      stock: 120,
      image: "https://placehold.co/800x800?text=PulseFit+Watch",
    },
    {
      name: "UrbanFlex Running Shoes",
      slug: "urbanflex-running-shoes",
      category: "fashion",
      brand: "UrbanFlex",
      description:
        "Lightweight running shoes designed for daily training and active lifestyles.",
      basePrice: 5999,
      salePrice: 3999,
      rating: 4.4,
      reviewCount: 1125,
      salesCount: 810,
      isFeatured: true,
      isFlashSale: false,
      sku: "URBANFLEX-RUN",
      stock: 200,
      image: "https://placehold.co/800x800?text=Running+Shoes",
    },
    {
      name: "Essential Cotton Oversized T-Shirt",
      slug: "essential-cotton-tshirt",
      category: "fashion",
      brand: "Essential",
      description:
        "Soft cotton oversized t-shirt designed for casual everyday wear.",
      basePrice: 1499,
      salePrice: 899,
      rating: 4.3,
      reviewCount: 780,
      salesCount: 1250,
      isFeatured: false,
      isFlashSale: true,
      sku: "ESSENTIAL-TEE",
      stock: 300,
      image: "https://placehold.co/800x800?text=Cotton+T-Shirt",
    },
    {
      name: "ChefPro Digital Air Fryer",
      slug: "chefpro-air-fryer",
      category: "home-kitchen",
      brand: "ChefPro",
      description:
        "Large-capacity digital air fryer designed for quick and convenient cooking.",
      basePrice: 8999,
      salePrice: 5999,
      rating: 4.6,
      reviewCount: 1432,
      salesCount: 1050,
      isFeatured: true,
      isFlashSale: true,
      sku: "CHEFPRO-AF",
      stock: 65,
      image: "https://placehold.co/800x800?text=Air+Fryer",
    },
    {
      name: "BlendMaster Smart Mixer",
      slug: "blendmaster-smart-mixer",
      category: "home-kitchen",
      brand: "BlendMaster",
      description:
        "High-performance kitchen mixer for smoothies, sauces and everyday cooking.",
      basePrice: 6999,
      salePrice: 4499,
      rating: 4.2,
      reviewCount: 512,
      salesCount: 380,
      isFeatured: false,
      isFlashSale: false,
      sku: "BLENDMASTER-01",
      stock: 55,
      image: "https://placehold.co/800x800?text=Smart+Mixer",
    },
    {
      name: "GlowCare Skin Essentials Kit",
      slug: "glowcare-skin-kit",
      category: "beauty",
      brand: "GlowCare",
      description:
        "Daily personal-care kit designed for a simple skincare routine.",
      basePrice: 2499,
      salePrice: 1799,
      rating: 4.5,
      reviewCount: 650,
      salesCount: 490,
      isFeatured: true,
      isFlashSale: false,
      sku: "GLOWCARE-KIT",
      stock: 110,
      image: "https://placehold.co/800x800?text=Beauty+Kit",
    },
    {
      name: "GameCore Wireless Controller",
      slug: "gamecore-wireless-controller",
      category: "gaming",
      brand: "GameCore",
      description:
        "Responsive wireless controller for comfortable gaming sessions.",
      basePrice: 4999,
      salePrice: 3499,
      rating: 4.6,
      reviewCount: 920,
      salesCount: 715,
      isFeatured: true,
      isFlashSale: true,
      sku: "GAMECORE-WC",
      stock: 90,
      image: "https://placehold.co/800x800?text=Gaming+Controller",
    },
    {
      name: "GameStation RGB Mechanical Keyboard",
      slug: "gamestation-rgb-keyboard",
      category: "gaming",
      brand: "GameStation",
      description:
        "Mechanical gaming keyboard with RGB lighting and programmable controls.",
      basePrice: 6999,
      salePrice: 4999,
      rating: 4.5,
      reviewCount: 740,
      salesCount: 560,
      isFeatured: false,
      isFlashSale: false,
      sku: "GAMESTATION-RGB",
      stock: 70,
      image: "https://placehold.co/800x800?text=RGB+Keyboard",
    },
    {
      name: "FitTrack Smart Band",
      slug: "fittrack-smart-band",
      category: "wearables",
      brand: "FitTrack",
      description:
        "Lightweight fitness band with activity and sleep tracking.",
      basePrice: 3999,
      salePrice: 2499,
      rating: 4.2,
      reviewCount: 560,
      salesCount: 430,
      isFeatured: false,
      isFlashSale: true,
      sku: "FITTRACK-BAND",
      stock: 150,
      image: "https://placehold.co/800x800?text=Fitness+Band",
    },
    {
      name: "PowerHub 65W GaN Charger",
      slug: "powerhub-65w-charger",
      category: "accessories",
      brand: "PowerHub",
      description:
        "Compact multi-device charger with fast charging support.",
      basePrice: 3999,
      salePrice: 2499,
      rating: 4.7,
      reviewCount: 1830,
      salesCount: 1520,
      isFeatured: true,
      isFlashSale: true,
      sku: "POWERHUB-65W",
      stock: 250,
      image: "https://placehold.co/800x800?text=65W+Charger",
    },
    {
      name: "FlexCharge 10000mAh Power Bank",
      slug: "flexcharge-power-bank",
      category: "accessories",
      brand: "FlexCharge",
      description:
        "Portable power bank for smartphones and everyday devices.",
      basePrice: 2999,
      salePrice: 1899,
      rating: 4.4,
      reviewCount: 1340,
      salesCount: 1100,
      isFeatured: false,
      isFlashSale: true,
      sku: "FLEXCHARGE-10K",
      stock: 210,
      image: "https://placehold.co/800x800?text=Power+Bank",
    },
    {
      name: "ProGrip Sports Backpack",
      slug: "progrip-sports-backpack",
      category: "sports",
      brand: "ProGrip",
      description:
        "Durable sports backpack with multiple compartments for daily use.",
      basePrice: 2999,
      salePrice: 1999,
      rating: 4.3,
      reviewCount: 420,
      salesCount: 320,
      isFeatured: false,
      isFlashSale: false,
      sku: "PROGRIP-BAG",
      stock: 80,
      image: "https://placehold.co/800x800?text=Sports+Backpack",
    },
    {
      name: "SmartHome Wi-Fi Camera",
      slug: "smarthome-wifi-camera",
      category: "electronics",
      brand: "SmartHome",
      description:
        "Compact indoor security camera with app-based monitoring.",
      basePrice: 4999,
      salePrice: 3299,
      rating: 4.4,
      reviewCount: 980,
      salesCount: 720,
      isFeatured: true,
      isFlashSale: false,
      sku: "SMARTHOME-CAM",
      stock: 60,
      image: "https://placehold.co/800x800?text=WiFi+Camera",
    },
  ];

  for (const data of products) {
    const categoryId = categories[data.category];

    const product = await prisma.product.upsert({
      where: {
        slug: data.slug,
      },
      update: {
        name: data.name,
        description: data.description,
        brand: data.brand,
        basePrice: data.basePrice,
        salePrice: data.salePrice,
        rating: data.rating,
        reviewCount: data.reviewCount,
        salesCount: data.salesCount,
        isFeatured: data.isFeatured,
        isFlashSale: data.isFlashSale,
        status: ProductStatus.ACTIVE,
        categoryId,
        sellerId: seller.id,
      },
      create: {
        sellerId: seller.id,
        categoryId,
        name: data.name,
        slug: data.slug,
        description: data.description,
        brand: data.brand,
        status: ProductStatus.ACTIVE,
        basePrice: data.basePrice,
        salePrice: data.salePrice,
        rating: data.rating,
        reviewCount: data.reviewCount,
        salesCount: data.salesCount,
        isFeatured: data.isFeatured,
        isFlashSale: data.isFlashSale,
      },
    });

    await prisma.productImage.deleteMany({
      where: {
        productId: product.id,
      },
    });

    await prisma.productImage.create({
      data: {
        productId: product.id,
        url: data.image,
        altText: data.name,
        position: 0,
      },
    });

    const variant = await prisma.productVariant.upsert({
      where: {
        sku: data.sku,
      },
      update: {
        name: "Default",
        price: data.salePrice,
        stock: data.stock,
      },
      create: {
        productId: product.id,
        sku: data.sku,
        name: "Default",
        price: data.salePrice,
        stock: data.stock,
        attributes: {
          color: "Default",
        },
      },
    });

    await prisma.inventory.upsert({
      where: {
        variantId: variant.id,
      },
      update: {
        quantity: data.stock,
      },
      create: {
        variantId: variant.id,
        quantity: data.stock,
        reserved: 0,
        lowStockLimit: 5,
      },
    });

    console.log(`✅ ${data.name}`);
  }

  console.log("");
  console.log("🎉 SuperCommerce seed completed!");
  console.log(`📦 Products: ${products.length}`);
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });