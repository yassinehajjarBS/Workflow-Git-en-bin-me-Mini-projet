
const PRODUCTS = [
    {id:1,title:"Luxury Red Rose Bouquet",price:250,type:"bouquets",img:"https://www.pinterest.com/pin/348677196172246772/"},
    {id:2,title:"Soft Pink Roses",price:190,type:"roses",img:"https://www.pinterest.com/pin/27443878976404552/"},
    {id:3,title:"Classic White Roses",price:170,type:"roses",img:"https://www.pinterest.com/pin/27303141486684133/"},
    {id:4,title:"Bright Yellow Bouquet",price:160,type:"roses",img:"https://www.pinterest.com/pin/127156389479996805/"},
    {id:5,title:"Luxury Purple Bouquet",price:260,type:"bouquets",img:"https://www.pinterest.com/pin/524599056615182282/"},
    {id:6,title:"Mixed Flower Arrangement",price:320,type:"bouquets",img:"https://www.pinterest.com/pin/16607092372308348/"},
    {id:7,title:"Special Gift Basket",price:420,type:"gifts",img:"https://www.pinterest.com/pin/44684221300834093/"},
    {id:8,title:"Flower & Doll Gift",price:360,type:"gifts",img:"https://www.pinterest.com/pin/5699937024544010/"},
    {id:9,title:"Small Romantic Bouquet",price:210,type:"bouquets",img:"https://www.pinterest.com/pin/422281212119973/"},
    {id:10,title:"Home Flower Arrangement",price:180,type:"bouquets",img:"https://www.pinterest.com/pin/1266706141356931/"},
    {id:11,title:"Outdoor Pink Roses",price:140,type:"roses",img:"https://www.pinterest.com/pin/2955556003128009/"},
    {id:12,title:"Elegant Classic Bouquet",price:230,type:"bouquets",img:"https://www.pinterest.com/pin/3870349675170395/"},
    {id:13,title:"Chocolate & Roses Gift",price:310,type:"gifts",img:"https://www.pinterest.com/pin/985231164676418/"},
    {id:14,title:"Home Flowers Bouquet",price:150,type:"bouquets",img:"https://www.pinterest.com/pin/18788523442270273/"},
    {id:15,title:"Seasonal Flower Bouquet",price:200,type:"bouquets",img:"https://www.pinterest.com/pin/912893786982299727/"},
    {id:16,title:"Luxury Flower Box",price:380,type:"gifts",img:"https://www.pinterest.com/pin/638596422201635938/"},
    {id:17,title:"Wedding Flower Bouquet",price:550,type:"bouquets",img:"https://www.pinterest.com/pin/609182287137705752/"},
    {id:18,title:"Stylish Flower Arrangement",price:290,type:"bouquets",img:"https://www.pinterest.com/pin/354447433196729088/"},
    {id:19,title:"Special Flower Bouquet",price:330,type:"bouquets",img:"https://www.pinterest.com/pin/238198267796253902/"},
    {id:20,title:"Roses in a Beautiful Box",price:400,type:"gifts",img:"https://www.pinterest.com/pin/638666790951937756/"},
    {id:21,title:"Cute Small Bouquet",price:120,type:"roses",img:"https://www.pinterest.com/pin/815292338828700062/"},
    {id:22,title:"Office Flower Arrangement",price:160,type:"bouquets",img:"https://www.pinterest.com/pin/112097478221163891/"},
    {id:23,title:"Elegant Gift",price:390,type:"gifts",img:"https://www.pinterest.com/pin/71213237852814404/"},
    {id:24,title:"Mixed Flower Bouquet",price:210,type:"bouquets",img:"https://www.pinterest.com/pin/211174978312074/"},
    {id:25,title:"Flower Crown",price:470,type:"bouquets",img:"https://www.pinterest.com/pin/1829656094572879/"},
    {id:26,title:"Morning Bouquet",price:130,type:"roses",img:"https://www.pinterest.com/pin/4081455907201835/"},
    {id:27,title:"Outdoor Decorative Flowers",price:200,type:"bouquets",img:"https://www.pinterest.com/pin/166773992448195339/"},
    {id:28,title:"Lovers' Gift Box",price:460,type:"gifts",img:"https://www.pinterest.com/pin/1548181186214283/"},
    {id:29,title:"Super Bouquet",price:600,type:"bouquets",img:"https://www.pinterest.com/pin/13159023905913217/"},
    {id:30,title:"Special Party Gift",price:520,type:"gifts",img:"https://www.pinterest.com/pin/165648092539079308/"}
  ];
  
  // ===== render products =====
  const grid = document.getElementById('products-grid');
  function render(list){
    grid.innerHTML = '';
    list.forEach(p=>{
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="card-body">
          <div class="card-title">${p.title}</div>
          <div class="card-meta"><div class="price">${p.price} MAD</div></div>
          <div class="card-actions">
            <button class="btn ghost" data-id="${p.id}" onclick="openModal(${p.id})">View</button>
            <button class="btn primary" data-id="${p.id}" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>`;
      grid.appendChild(card);
    });
  }
  render(PRODUCTS);
  
  // ===== gallery images =====
  const galleryImages = [
    "https://www.pinterest.com/pin/1477812373590017/",
    "https://www.pinterest.com/pin/79446380923409337/",
    "https://www.pinterest.com/pin/3237030977038013/",
    "https://www.pinterest.com/pin/19632948369647927/",
    "https://www.pinterest.com/pin/3518505951587975/",
    "https://www.pinterest.com/pin/410179478579948524/",
    "https://www.pinterest.com/pin/985231165078574/",
    "https://www.pinterest.com/pin/14425661317759244/",
    "https://www.pinterest.com/pin/4011087179122660/",
    "https://www.pinterest.com/pin/563018697233861/",
    "https://www.pinterest.com/pin/265079128063303421/",
    "https://www.pinterest.com/pin/2111131072243062/"
  ];
  const galleryGrid = document.getElementById('galleryGrid');
  galleryImages.forEach(src=>{
    const img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';
    galleryGrid.appendChild(img);
  });
  
  // ===== search & filter =====
  document.getElementById('filter-type').addEventListener('change', applyFilters);
  document.getElementById('search').addEventListener('input', applyFilters);
  
  function applyFilters(){
    const q = document.getElementById('search').value.trim().toLowerCase();
    const type = document.getElementById('filter-type').value;
    const filtered = PRODUCTS.filter(p=>{
      return (type === 'all' || p.type === type) &&
             (p.title.toLowerCase().includes(q) || q === '');
    });
    render(filtered);
  }
  
  // ===== modal logic =====
  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');
  let currentProductId = null;
  
  function openModal(id){
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    currentProductId = id;
    modalImg.src = p.img;
    modalTitle.textContent = p.title;
    modalPrice.textContent = p.price + " MAD";
    modalDesc.textContent = "A beautiful product description. You can edit this description and add more details.";
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
  }
  modalClose.addEventListener('click', ()=>{ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); });
  
  // ===== cart (localStorage) =====
  const CART_KEY = 'flower_cart_v2';
  function getCart(){ return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartCount(); }
  function addToCart(id){
    const cart = getCart();
    const item = cart.find(i=>i.id===id);
    if(item) item.qty++;
    else cart.push({id,qty:1});
    saveCart(cart);
    alert("✔ Added to cart");
  }
  document.getElementById('addToCartBtn')?.addEventListener('click', ()=>{
    if(currentProductId) addToCart(currentProductId);
  });
  
  function updateCartCount(){
    const c = getCart().reduce((s,i)=>s+i.qty,0);
    document.getElementById('cartCount').textContent = c;
  }
  updateCartCount();
  
  // ===== small UI helpers =====
  document.getElementById('navToggle').addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // ===== contact form (fake) =====
  document.getElementById('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Message sent! We will contact you soon 😊');
    e.target.reset();
  });
  message.txt