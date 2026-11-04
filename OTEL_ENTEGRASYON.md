# Otel entegrasyonu

## Hazır demo bağlantısı

Yayın adresinin sonuna otel bilgilerini ekleyerek aynı rehberi otele özel karşılama alanıyla açabilirsiniz:

`https://wonkad1.github.io/site/?hotel=flora-resort&name=Flora%20Resort&accent=%23B34A3C`

- `hotel`: otelin kısa, URL uyumlu kimliği.
- `name`: misafire gösterilecek otel adı.
- `accent`: marka vurgusu için 3 veya 6 haneli hex renk (`%23` = `#`).
- `otel` ve `partner` kimlik, `hotelName` ve `otel_adi` ad parametreleri de desteklenir.

Bu örnek yalnızca tasarım demosudur. Kendi otel adınızı ve marka renginizi kullanarak bağlantıyı üretip QR kodunu otelin giriş, oda veya resepsiyon materyaline basabilirsiniz. Otel parametresi yoksa ziyaretçi genel Manavgat rehberini görür.

## Şu anki entegrasyon sınırı

Bu sürüm statik bir web rehberidir: misafir hesabı, rezervasyon, otel yönetim paneli, kişisel veri aktarımı veya ziyaret analitiği içermez. URL parametreleri otelin adını ve vurgu rengini gösterir; özel logo, oda/rezervasyon verisi, otel CMS bağlantısı ve yönetim paneli daha sonraki ticari entegrasyon işidir.

## Otel yayına alma adımları

1. Otel kimliğini `hotel` parametresine yazın; ör. `lale-resort`.
2. Otel adını URL kodlamasıyla `name` parametresine ekleyin.
3. Marka rengini `accent=%23RRGGBB` biçiminde ekleyin.
4. Tam bağlantıyı telefonda deneyin, ardından bu tam bağlantı için QR kod üretin.
5. QR kodu farklı bir telefondan, otelin Wi‑Fi ağına bağlı değilken de açıp kontrol edin.
