# MenuBaseNextjs

`MenuBaseNextjs`, restoran menusu ve admin yonetimi senaryosu icin gelistirilmis bir `Next.js` uygulamasidir.

Uygulama ozellikleri:
- Menu kartlarini kullaniciya gosterir.
- Admin panelinden yemek ekleme, listeleme, guncelleme ve silme islemlerini yapar.
- Verileri tarayici tarafinda `localStorage` uzerinde saklar.
- `Tailwind CSS` ile sade ve klasik bir arayuz sunar.

## Teknolojiler

- `Next.js` App Router
- `React`
- `TypeScript`
- `Tailwind CSS`

## Proje Yapisi

```text
src/
  app/
  Components/
  Data/
  Features/Pages/
  Hooks/
  Interfaces/
  Layouts/
  Utils/
```

Not:
`Pages` yapisi, Next.js'in `src/pages` route sistemiyle cakismamasi icin `src/Features/Pages` altinda tutulmustur.

## Kurulum

```bash
npm install
```

## Gelistirme Ortami

```bash
npm run dev
```

Tarayicida ac:

```text
http://localhost:3000
```

## Uretim Build

```bash
npm run build
```

Uretim modunda calistirmak icin:

```bash
npm run start
```

## localStorage Davranisi

Uygulama yemek verilerini su anahtar ile saklar:

```text
menubase-menu-items
```

Eger seed veride degisiklik yapip tarayicida eski kayitlari gormeye devam edersen, ilgili `localStorage` kaydini temizlemelisin.

Tarayici konsolunda:

```js
localStorage.removeItem('menubase-menu-items');
location.reload();
```

