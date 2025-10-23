import React from 'react'
import "./Daraz.css"

let productsData =[
{
    productImage : "	https://img.drz.lazcdn.com/static/pk/p/e6a52e2513edc3273780067dae07c305.png_720x720q80.png_.webp",
     productTitle: "2025 Premium Quality Luxury Ladies hand bag for girls with Top Handle bags For Girls",
productPrice : "Rs. 1,664"
},

 {
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/776025092b5a03ecab6594069da6def5.png_720x720q80.png_.webp",
     productTitle: "Jenpharm - Anagrow Anti Hair Loss Shampoo 100ml | Restores Hair | Anti Hair fall",
productPrice : "Rs. Rs. 941"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/S41f18c72b97e4c4ebbb3e19adb90d27br.jpg_720x720q80.jpg_.webp",
     productTitle: "Catch 22 Perfume For Men | Our #1 Best Seller Perfume | Long Lasting | Scents N Stories",
productPrice : "Rs. Rs. 1,970"
},

{
     productImage: "https://static-01.daraz.pk/p/dc06cffaf8ef7be55df827ed58362cfa.jpg",
     productTitle: "Pack of 3 Decorative Butterfly Wall Shelf, Latest Butterfly Candle Stand, Wall Decor Ideas, Wooden Wall Shelves |New Premium Wooden Wall Art Big Size I Wall Decor Art for bedroom I Decoration Piece for Home Decor I Latest Butterfly Candle Stand Shelf",
productPrice : "Rs.970"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/96c8e39603827a931bb31de6e09004dc.jpg_720x720q80.jpg_.webp",
     productTitle: "Dream White",
productPrice : "Rs.990"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/359d03af26f5625a4ab67276d81e3d88.jpg_720x720q80.jpg_.webp",
     productTitle: "Collar Mic 3.5mm Stereo MICK For Computer / Other Equipments Special Microphone For Recording Speaking Clear Sound Quality Best Price",
productPrice : "Rs. Rs. 190"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/bf6e96d52a9b6c87cb96e44549454058.png_720x720q80.png_.webp",
     productTitle: "K9 Wireless Lavalier Microphone | Clip-On Collar Mic for iPhone, Android & Type-C Devices | Noise Cancelling Wireless Mic for YouTube, Vlogging, Interviews, Podcasts & Live Streaming",
productPrice : "Rs. 651"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/ebaf0afb2c4fb2a2a29e6b065a0a0d56.jpg_720x720q80.jpg_.webp",
     productTitle: "Pack of 5 Mix Square Canvas, Canvas Board for Painting, High Quality Canvas Best for Professional & Student",
productPrice : "Rs. 500"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/49e73a6ee9dd108be5c9433b3ba422dc.png_720x720q80.png_.webp",
     productTitle:"H -Gold Fortified Milk Full Cream Powder 850 Gram and 1 KG - H Gold - Milk powder - full cream - dry milk powder for tea Pakistani - Powdered Milk - Milke powder - Powder tea Milk - Milk powder for tea - pakistani milk powder ",
productPrice : "Rs.200"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/d9be72dc5b39a5f907863958434c3eea.jpg_720x720q80.jpg_.webp",	
     productTitle: " Pet removal brush. Cat supplies. Long hair comb brush - Random Color",
productPrice : "Rs. 399"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/f671bb7742656d834e7b657ee5d475e4.png_720x720q80.png_.webp",
     productTitle: "Handbags For Girls - Hand Bags - Shoulder Bag with long belt - Handbag for Girls Ladies - Designer Handbags Bags for Women - Trendy Purse - Latest Design - Easy to carry. WD Mall",
productPrice : "Rs. 1099"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/12520551370781ddc9143f58c2ae9704.jpg_720x720q80.jpg_.webp",	
     productTitle: "Electric Hand Held Milk Coffee Beater",
productPrice : "Rs.237"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/Sb672f941a4e04cfdb8aea3fb11dbc762I.jpg_720x720q80.jpg_.webp",	
     productTitle: "Phone Silicone Suction Cup Holder Multifunctional Suction Cup Wall Stand Square Anti-Slip Single-Sided Case Mount Back Sticker",
productPrice : "Rs.457"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/01470793ef1c91ad665d6e303a460774.jpg_720x720q80.jpg_.webp",	
     productTitle:"Globe Stainless Steel Food Grade Sipri Set/Handi Set (Hammered/ Mathar/ Naqshi)",
productPrice : "Rs. 990"
},

{
     productImage: "https://img.drz.lazcdn.com/g/kf/Sa14b8145f21949f1b35003e2b0b998a40.jpg_720x720q80.jpg_.webp",
     productTitle: "Classic Stainless Steel Serving Balti Medium",
productPrice : "Rs. 770"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/4ff10e2eb0549c931c592363a8197c12.jpg_720x720q80.jpg_.webp",	
     productTitle: "Traditional Steel Daig Serving & Cooking Handi Inner Outer Stainless Steel 500gm",
productPrice : "Rs. 768"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/d464a59e0b3a8a9b947811fabd19d544.jpg_720x720q80.jpg_.webp",
     productTitle:"Pack of 3 Silver Stainless Steel Snake Chain Snake Bracelet and Silver ring",
productPrice : "Rs. Rs. 1000"
},

{
     productImage: "https://static-01.daraz.pk/p/640b173ad3acdaa435c6f7dfc190891a.jpg",
     productTitle:"Premium Laptop bag, Travel bag",
productPrice : "Rs. Rs. 2000"
},

{
     productImage: "https://static-01.daraz.pk/p/c86fdf27a7b96ab5e275ed032fc95177.jpg",
     productTitle:"Woven Bear Toy Storage Bag with Lid – Large Capacity Storage Basket for Kids Toys, Laundry & Baby Essentials | Durable Woven Organizer Bin for Home, Nursery & Playroom (Mix/Random Colours)",
productPrice : "Rs. Rs. 550"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/S256bc284e37d4520b33f3506d763f71f4.jpg_720x720q80.jpg_.webp",
     productTitle: "New Shoulder Hand bag for girls premium Quality style beautiful Bags for girls simplified Underarm Stick Bag crossbody bags",
productPrice : "Rs. Rs. 2999"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/Sb78b27edd8c64e709b4a3b3c09c989f4w.jpg_720x720q80.jpg_.webp",
     productTitle:"Adjustable Mobile Phone Stand with Microphone Holder for Table Desk Bed Black",
productPrice : "Rs. Rs. 1111"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/Scefd2238e2da4dbdb3dc57a5b6e8e245g.jpg_720x720q80.jpg_.webp",
     productTitle: "Sweatshirt And Pajama/Trousers For Kids Baby Boys And Baby Girls Imported Comfy Winter Water Top Clothes Sets Dresses Outfit Tracksuit Jannat Place",
productPrice : "Rs. Rs. 990"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/7181a88e5a61eddcec684b85f24691c9.jpg_720x720q80.jpg_.webp",
     productTitle: "10 PCS Nose Black head Remover Mask Skin Care Shrink Pore Acne Treatment Mask Deep Nose Pore Cleansing Strips Black Head Remover Strip",
productPrice : "Rs. Rs. 870"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/28502dc4392e514c32839e806eb6423d.jpg_720x720q80.jpg_.webp",
     productTitle: "Men;s long sleeves navy blue shirt with under white T Shirt",
productPrice : "Rs. 770"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/7af2f60eb23816ae586ef690e27f9ff9.jpg_720x720q80.jpg_.webp",
     productTitle: "Improved Quality LARGE Storage Bags FOR SHIRTS CLOTHS AND BLANCKETS DOUBLE ZIPPER Organizer",
productPrice : "Rs. 880"
},

{
     productImage: "https://img.drz.lazcdn.com/g/kf/Sf41c53b46e24400d9bacd7620075587et.jpg_720x720q80.jpg_.webp",
     productTitle: "Blue Light Filtered Protective Glasses UV400 filtered mineral glass Computer Glasses for Men and Women Eye Protective Glasses Screen Glasses",
productPrice : "Rs. 770"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/170d573e3aedc01ed3007d6ef3573683.jpg_720x720q80.jpg_.webp",	
     productTitle:"Sandals For Men || New Stylish and Tranding Sandals For Boys House slippers for men",
productPrice : "Rs. 550"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/1db0606219723413fc4434c2ae93b675.jpg_720x720q80.jpg_.webp",	
     productTitle: "LICENSE Extreme Slim Wallet/ Card holder for Men",
productPrice : "Rs. 2970"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/a23c4afa59fe2fa90cae404feb9d9594.jpg_720x720q80.jpg_.webp",	
     productTitle: "3Pcs Large Foldable Clothes Storage Zipper Bag",
productPrice : "Rs. 770"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/274bddd5c12757e19f8739bcbda42e99.jpg_720x720q80.jpg_.webp",	
     productTitle: "Different Color Flips Flops Men Slippers High Trend , Men Slippers , Casual Slippers , Men's Everyday Chappals - Foam Slippers - Soft and comfortable daily wear slippers - Bathroom slippers - do patti chappal - slippers for unisex",
productPrice : "Rs. 1,970"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/eaaf15d586988c2a44fc48789085d1b6.jpg_720x720q80.jpg_.webp",
     productTitle: "PACK OF 8 ENGLISH NOVELS ( ATOMIC HABITS - THINK AND GROWW RICH - THEE PSYCHOLOGY OF MONEY - THE ART OF READING MIND - THE ART OF BEING ALONE - ATTITUDE IS EVERYTHINGS)BEST READING NOVELS.",
productPrice : "Rs. 8970"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/635da860c5575c4e3a89a3cc77f95ac4.jpg_720x720q80.jpg_.webp",	
     productTitle: "Dell Pro Sleeve 13 (Original)",
productPrice : "Rs. 880"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/S1b666e407b2540329f43fd21f43e6d00Z.jpg_720x720q80.jpg_.webp",	
     productTitle: "Magnetic Neckband Headphones Wireless Bluetooth 5.2 Earphones LED Display Headset Sport Noise Cancel Earbuds with Mic",
productPrice : "Rs. 970"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/ee656180d2bf80947b729cda6f29e731.png_720x720q80.png_.webp",
     productTitle:"Moon Touch Lip & Cheek Tint – 20ml – Natural Finish – Hydrating & Long-Lasting – 7 Shades",
productPrice : "Rs. 5970"
},

{
     productImage: "https://img.drz.lazcdn.com/g/kf/S3524ff8a08ff43b0bdfb97b4bf938b77e.jpg_720x720q80.jpg_.webp",
     productTitle: "Loafers for men || Shoes for men || trending loafers for men",
productPrice : "Rs. 770"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/ee3ab6aa3543f6fba3d7e9eee288d080.jpg_120x120q80.jpg_.webp",
     productTitle:"Heartbeat logo Print Winter Track Suit Hoodie and Trouser",
productPrice : "Rs. 2220"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/6a5c17fe5dbea47b70872520dfd66865.jpg_720x720q80.jpg_.webp",
     productTitle: "Wireless Headphones, P47 Bluetooth Foldable Headset with Microphone Support FM Radio TF for PC TV Smart Phones & Tablets Etc",
productPrice : "Rs. 970"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/c2108b87ef83157d7e67f6c74dae360f.jpg_720x720q80.jpg_.webp",
     productTitle: "Waterproof & Dustproof Three Blades Ceiling Fan Covers with Motor Cover Grey 1 Fan - 2 fan - 3 fan - 4 Fan - 5 Fan Cover Set",
productPrice : "Rs. 770"
},

{
     productImage: "https://img.drz.lazcdn.com/g/kf/S87a4b5d09c094005a8a7210307a27a71Q.jpg_720x720q80.jpg_.webp",	
     productTitle: "Stylish Hublot Man's Watch With Fragrant Belt Black Color Watch",
productPrice : "Rs. 1370"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/S8c7dcd0442194a47bc26f08a84dbc1e2U.jpg_720x720q80.jpg_.webp",
     productTitle: "Customized Black Name Ring with Gift Box – High-Quality Stainless Steel Ring with Free Name Engraving",
productPrice : "Rs. 3330"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/67e7224e5e45851c10534869e271c6e0.jpg_720x720q80.jpg_.webp",
     productTitle: "New Trendy SLIM PU Leather Long Wallet For Men and Women Cash And Card Holder.",
productPrice : "Rs. 2270"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/90238f131195096ae8aaad774de4345b.jpg_720x720q80.jpg_.webp",
     productTitle: "Keratin Hair Mask Keratin Hair Treatment Straighten Hair For Hair 500 ML",
productPrice : "Rs. 8880"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/f3ca0b2ae5f3c7c7f285221f9d69794d.jpg_720x720q80.jpg_.webp",
     productTitle: "Flea Tick Comb For Dogs And Cats",
productPrice : "Rs. 1110"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/6e8b66ffc0af7ab82425e75e1f8620cc.jpg_720x720q80.jpg_.webp",
     productTitle: "Slippers for men / House slippers for men / flipflops / Fashionable slippers for men",
productPrice : "Rs. 3370"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/32775d37815a866d78ec4445ee1dd890.jpg_720x720q80.jpg_.webp",
     productTitle: "Silicone Phone Cases For iPhone 16Promax, 16Pro, 16, 15Promax, 15Pro, 15Plus, iPhone 15, 14Promax, 14Pro, 14Plus, 14, 13Promax, 13Pro, 13, 12Promax, 12Pro, 12, 11Promax, 11Pro, 11, X/Xs, XMAX | Most Selling Mobile Cases Online | New Covers For iPhone",
productPrice : "Rs. 2770"
},

{
     productImage: "https://img.drz.lazcdn.com/static/pk/p/adc291a29d17c7742d66868a1ef65e37.jpg_720x720q80.jpg_.webp",
     productTitle: "Wall Mounted Universal Mobile Phone Holder for Charging, Secure and Stylish, Multiple Colors",
productPrice : "Rs. 6670"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/5017ffb775162955e5eb25d6e9b3c056.jpg_720x720q80.jpg_.webp",
     productTitle: "Silicone Moisturizing Socks & Gloves (1 Pair Each) for Intensive Hydration",
productPrice : "Rs. 2220"
},

{
     productImage: "	https://img.drz.lazcdn.com/g/kf/S1b666e407b2540329f43fd21f43e6d00Z.jpg_720x720q80.jpg_.webp",
     productTitle: "Magnetic Neckband Headphones Wireless",
productPrice : "Rs. 3330"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/51a53b6289e842c0b8be0b4b27c415de.jpg_720x720q80.jpg_.webp",
     productTitle: "Cat Neck Rainbow Ribbon Adjustable Collar",
productPrice : "Rs. 1170"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/194f537ed56f22fd28b16d0bb603d77b.jpg_120x120q80.jpg_.webp",
     productTitle: "Mini Slim Smart Card Holder - Slim Smart Wallet - Smart Wallet With 7 Compartments",
productPrice : "Rs. 2270"
},

{
     productImage: "	https://img.drz.lazcdn.com/static/pk/p/5bdded18f61f18c1e95220c5d007c2ae.jpg_720x720q80.jpg_.webp",
     productTitle: "Mosquito Coil Stand Triangle Anti-scald Mosquito Coil Holder Stand Wax",
productPrice : "Rs. 3370"
}
]

function Daraz() {
  return (
    <div>
      <h1>DarazProducts</h1>
        <div className="products">
      {
        productsData.map((myProduct)=>{
            return <Product {...myProduct} />
        })
      
      
      }
        </div>
    </div>
  )
}

export default Daraz

function Product(props){
    console.log(props)
return (

    <div className='product'>
 <img src={props.productImage} alt="shampoo" />
<h5>{props.productTitle}</h5>
<p>{props.productPrice}</p>

</div>
)
}