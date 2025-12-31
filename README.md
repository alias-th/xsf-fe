# XSF FullStack Developer Test

แพลตฟอร์มออนไลน์ที่รวบรวมวัสดุตกแต่งพื้นผิวสำหรับบ้านและอาคาร พัฒนาโดยใช้ Next.js, Styled component.

---

## Features

- Landing Page
- All Product Page
- Upload Product page

---

## DB Diagram

https://dbdiagram.io/d/xsf-test-694f7dab39fa3db27b9e68a2

---

## Environment Variables

| ตัวแปร                  | คำอธิบาย            | ตัวอย่าง |
| ----------------------- | ------------------- | -------- |
| `NEXT_PUBLIC_API_URL`   | Public api          | ``       |
| `NEXT_PUBLIC_IMAGE_URL` | Public url image r2 | ``       |

---

## กำหนด Environment Variables

1. สร้าง `.env` ไว้ใน root directory ของ project:

   ```bash
   touch .env
   ```

2. กำหนดตัวแปรตามตารางด้านบน

---

## เริ่มการทำงานโดยใช้คำสั่งต่อไปนี้

1. ติดตั้ง dependencies:

   ```bash
   npm install
   ```

2. เริ่มการทำงาน :

   ```bash
   npm run dev
   ```

---

## Postman Document

https://documenter.getpostman.com/view/32892772/2sBXVbJuPY
