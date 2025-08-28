
        // Bölümler Arası Geçiş
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            if (sectionId === 'anasayfa') {
                document.querySelector('.nav-item').classList.add('active');
            }
        }

        // Kategori Sayfasını Göster
        function showCategoryPage(category) {
            showSection(category);
            loadCategoryProducts(category);
        }

        // Ürün Arama
        function searchProducts() {
            const query = document.getElementById('mainSearch').value.toLowerCase();
            const allProducts = document.querySelectorAll('.product-card');
            let found = false;
            
            allProducts.forEach(product => {
                const title = product.querySelector('.product-title').innerText.toLowerCase();
                if (title.includes(query)) {
                    product.style.display = 'block';
                    found = true;
                } else {
                    product.style.display = 'none';
                }
            });
            
            if (!found) {
                alert('Aradığınız kriterlere uygun ürün bulunamadı.');
            }
        }

        // Filtre Uygula
        function applyFilters() {
            const minPrice = document.getElementById('minPrice').value;
            const maxPrice = document.getElementById('maxPrice').value;
            const condition = document.getElementById('conditionFilter').value;
            const location = document.getElementById('locationFilter').value;
            const sort = document.getElementById('sortFilter').value;
            
            alert(`Filtreler uygulandı:\nFiyat: ${minPrice || 'Min'} - ${maxPrice || 'Max'}\nDurum: ${condition || 'Tümü'}\nKonum: ${location || 'Tüm Türkiye'}\nSıralama: ${sort}`);
        }

        // Kategoriye Göre Ürün Yükleme (Örnek Verilerle)
        function loadCategoryProducts(category) {
            const productsContainer = document.getElementById(category + 'Products');
            if (!productsContainer) return;
            
            productsContainer.innerHTML = ''; // Mevcut ürünleri temizle

            // Örnek ürün verileri
            const sampleProducts = {
                elektronik: [
                    { title: 'iPhone 13 Pro 256GB - Altın', price: '28.500 TL', location: 'İstanbul, Beşiktaş', features: ['Sıfır Gibi', '256GB', 'Garantili'], badge: 'ÖNE ÇIKAN' },
                    { title: 'Samsung Galaxy S22 Ultra 512GB', price: '25.999 TL', location: 'Ankara, Çankaya', features: ['Sıfır', '512GB', 'Garantili'], badge: 'YENİ' },
                    { title: 'MacBook Pro 14" M2 Pro 1TB', price: '42.750 TL', location: 'İzmir, Karşıyaka', features: ['Az Kullanılmış', '1TB SSD', 'Garantili'], badge: 'HIZLI' },
                    { title: 'Sony PS5 Digital Edition + 2 Oyun', price: '15.999 TL', location: 'Bursa, Nilüfer', features: ['Sıfır Gibi', '2 Oyun', 'Faturalı'], badge: 'İNDİRİM' }
                ],
                giyim: [
                    { title: 'Nike Air Max 270', price: '1.200 TL', location: 'İstanbul, Kadıköy', features: ['Az Kullanılmış', '42 Numara'], badge: 'ÖNE ÇIKAN' },
                    { title: 'Adidas Originals Hoodie', price: '350 TL', location: 'Ankara, Yenimahalle', features: ['Sıfır', 'L Beden'], badge: 'YENİ' },
                    { title: 'Levi\'s 501 Jeans', price: '450 TL', location: 'İzmir, Bornova', features: ['Kullanılmış', '32 Beden'], badge: 'HIZLI' },
                    { title: 'Zara Basic T-Shirt', price: '100 TL', location: 'Bursa, Osmangazi', features: ['Sıfır Gibi', 'M Beden'], badge: 'İNDİRİM' }
                ],
                'ev-yasam': [
                    { title: 'IKEA Sofa Set', price: '3.500 TL', location: 'İstanbul, Üsküdar', features: ['Az Kullanılmış', '3+1'], badge: 'ÖNE ÇIKAN' },
                    { title: 'Bosch Washing Machine', price: '2.800 TL', location: 'Ankara, Çankaya', features: ['Sıfır', '7kg Kapasite'], badge: 'YENİ' },
                    { title: 'Philips Air Fryer', price: '1.200 TL', location: 'İzmir, Konak', features: ['Kullanılmış', '2 Litre'], badge: 'HIZLI' },
                    { title: 'Samsung 55" 4K TV', price: '5.500 TL', location: 'Bursa, Yıldırım', features: ['Sıfır Gibi', 'Smart TV'], badge: 'İNDİRİM' }
                ],
                arac: [
                    { title: '2018 Model Honda Civic', price: '250.000 TL', location: 'İstanbul, Ataşehir', features: ['Az Kullanılmış', 'Benzin'], badge: 'ÖNE ÇIKAN' },
                    { title: '2020 Model Toyota Corolla', price: '300.000 TL', location: 'Ankara, Keçiören', features: ['Sıfır', 'Dizel'], badge: 'YENİ' },
                    { title: '2017 Model Ford Focus', price: '220.000 TL', location: 'İzmir, Gaziemir', features: ['Kullanılmış', 'Benzin'], badge: 'HIZLI' },
                    { title: '2019 Model Renault Clio', price: '180.000 TL', location: 'Bursa, Nilüfer', features: ['Sıfır Gibi', 'Dizel'], badge: 'İNDİRİM' }
                ],
                spor: [
                    { title: 'Nike Running Shoes', price: '800 TL', location: 'İstanbul, Beşiktaş', features: ['Az Kullanılmış', '40 Numara'], badge: 'ÖNE ÇIKAN' },
                    { title: 'Adidas Soccer Ball', price: '150 TL', location: 'Ankara, Mamak', features: ['Sıfır', '5 Numara'], badge: 'YENİ' },
                    { title: 'Puma Sports Jacket', price: '400 TL', location: 'İzmir, Karşıyaka', features: ['Kullanılmış', 'L Beden'], badge: 'HIZLI' },
                    { title: 'Decathlon Yoga Mat', price: '200 TL', location: 'Bursa, Osmangazi', features: ['Sıfır Gibi', '6mm Kalınlık'], badge: 'İNDİRİM' }
                ],
                kitap: [
                    { title: 'The Great Gatsby - F. Scott Fitzgerald', price: '50 TL', location: 'İstanbul, Kadıköy', features: ['Az Kullanılmış', 'İngilizce'], badge: 'ÖNE ÇIKAN' },
                    { title: '1984 - George Orwell', price: '40 TL', location: 'Ankara, Çankaya', features: ['Sıfır', 'Türkçe'], badge: 'YENİ' },
                    { title: 'To Kill a Mockingbird - Harper Lee', price: '60 TL', location: 'İzmir, Bornova', features: ['Kullanılmış', 'İngilizce'], badge: 'HIZLI' },
                    { title: 'Sapiens - Yuval Noah Harari', price: '70 TL', location: 'Bursa, Yıldırım', features: ['Sıfır Gibi', 'Türkçe'], badge: 'İNDİRİM' }
                ],
                oyuncak: [
                    { title: 'Lego City Set', price: '300 TL', location: 'İstanbul, Ataşehir', features: ['Az Kullanılmış', '5-12 Yaş'], badge: 'ÖNE ÇIKAN' },
                    { title: 'Barbie Dreamhouse', price: '450 TL', location: 'Ankara, Yenimahalle', features: ['Sıfır', '3-10 Yaş'], badge: 'YENİ' },
                    { title: 'Hot Wheels Track Set', price: '200 TL', location: 'İzmir, Konak', features: ['Kullanılmış', '4-8 Yaş'], badge: 'HIZLI' },
                    { title: 'Fisher-Price Baby Gym', price: '150 TL', location: 'Bursa, Nilüfer', features: ['Sıfır Gibi', '0-2 Yaş'], badge: 'İNDİRİM' }
                ],
                diger: [
                    { title: 'Vintage Vinyl Record', price: '120 TL', location: 'İstanbul, Beşiktaş', features: ['Az Kullanılmış', 'The Beatles'], badge: 'ÖNE ÇIKAN' },
                    { title: 'Antique Wall Clock', price: '800 TL', location: 'Ankara, Mamak', features: ['Sıfır', 'Dekoratif'], badge: 'YENİ' },
                    { title: 'Collectible Action Figure', price: '250 TL', location: 'İzmir, Karşıyaka', features: ['Kullanılmış', 'Limited Edition'], badge: 'HIZLI' },
                    { title: 'Handmade Ceramic Vase', price: '300 TL', location: 'Bursa, Osmangazi', features: ['Sıfır Gibi', 'Dekoratif'], badge: 'İNDİRİM' }
                ]
            };  
            
            const products = sampleProducts[category] || [];
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <div class="product-badge">${product.badge}</div>
                        ${product.title}
                    </div>
                    <div class="product-info">
                        <div class="product-title">${product.title}</div>
                        <div class="product-price">${product.price}</div>
                        <div class="product-location">📍 ${product.location}</div>
                        <div class="product-features">
                            ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
        }

        // Giriş Modalını Aç
        function openLoginModal() {
            document.getElementById('login-modal').classList.add('active');
        }

        // Giriş Modalını Kapat
        function closeLoginModal() {
            document.getElementById('login-modal').classList.remove('active');
        }

        // Giriş/Kayıt Tab Geçişi
        function switchLoginTab(tab) {
            document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
            
            document.querySelector(`.login-tab:nth-child(${tab === 'login' ? 1 : 2})`).classList.add('active');
            document.getElementById(`modal-${tab}-form`).classList.add('active');
        }

        // İlan Formu Gönderimi
        document.getElementById('ilanForm').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('İlanınız başarıyla yayınlandı!');
            this.reset();
        });

        // Giriş Formu Gönderimi
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                alert('Giriş başarılı! Hoş geldiniz.');
                showSection('anasayfa');
            }
        });

        // Kayıt Formu Gönderimi
        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Şifreler eşleşmiyor!');
                return;
            }
            
            if (fullName && email && password) {
                alert('Kayıt başarılı! Giriş yapabilirsiniz.');
                showSection('giris-yap');
            }
        });

        // Modal Giriş Formu
        document.getElementById('modal-login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('modal-email').value;
            const password = document.getElementById('modal-password').value;
            
            if (email && password) {
                alert('Giriş başarılı! Hoş geldiniz.');
                closeLoginModal();
            }
        });

        // Modal Kayıt Formu
        document.getElementById('modal-register-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const fullName = document.getElementById('modal-fullname').value;
            const email = document.getElementById('modal-register-email').value;
            const password = document.getElementById('modal-register-password').value;
            const confirmPassword = document.getElementById('modal-confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Şifreler eşleşmiyor!');
                return;
            }
            
            if (fullName && email && password) {
                alert('Kayıt başarılı! Giriş yapabilirsiniz.');
                switchLoginTab('login');
            }
        });

        // Sayfa Yüklendiğinde Ana Sayfayı Göster
        document.addEventListener('DOMContentLoaded', function() {
            showSection('anasayfa');
        });

        // Ürün Filtreleme
        function filterProducts(type) {
            alert(`${type} filtresi uygulanıyor...`);
        }
  