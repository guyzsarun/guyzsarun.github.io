---
layout: post
title: "การสร้าง Root HTTPProxy บน Contour"
author: guyzsarun
categories: [kubernetes, contour]
image: assets/images/k8s-ingress-with-contour/contour-2.png
---

หลังจากที่เราทำการ Install Contour เป็น Kubernetes Ingress ไปใน [Part ที่แล้ว](https://medium.com/vmware-tech-community-thailand/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-kubernetes-ingress-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-contour-928ab79292ed)  
ใน Part นี้เราจะมาดูวิธีการสร้าง root HTTPProxy เพื่อแก้ปัญหา Config Ingress ชนกันบน Cluster เวลาหลายๆทีมมีการใช้ FQDN เดียวกัน. รวมถึงเพื่อช่วย Platform/ Operator Team ในการ Manage Ingress / Proxy จากฝั่ง Developer 

**Root HTTPProxy & Inclusion Concepts**

![Contour](https://cdn-images-1.medium.com/max/1600/0*piORlCHeHUuURZMX)  
ก่อนที่เราจะทำการใช้ Root HTTPProxy เราต้องมีการ Config `namespace` ที่จะใช้เป็น Root ก่อน โดยสามารถกำหนดโดยใช้ flag `--root-namespaces` หรือกำหนด `contour.rootNamespaces` ตอน Install ด้วย Helm. 

หลังจากนั้นเราจะสามารถ Include HTTPProxy resource จาก `namespace` อื่นที่ Developer หรือ Team ต่างๆมีการใช้งาน โดยจะใช้ Concept ของ Inclusion เป็นคล้ายๆกับ `Selector` ใน k8s ในการเลือก HTTPProxy จากฝั่ง Developer มาใช้

**ตัวอย่างการสร้าง Root HTTPProxy**

<script src="https://gist.github.com/guyzsarun/cb62693b4219153f0bc4f1eecf5de870.js"></script>

ในตัวอย่างมีการกำหนด `rootNamespaces` เป็น `httpproxy-root` มี FQDN เป็น `foo-basic.bar.com`

สามารถเข้าถึง HTTPProxy `auth` ที่อยู่ใน namespace `authentication` ผ่าน `foo-basic.bar.com/auth`

และ HTTPProxy `reserve` ใน namespace `reservations` ผ่าน `foo-basic.bar.com/reservations`

**ตัวอย่าง HTTPProxy ในแต่ละ Namespace**

<script src="https://gist.github.com/guyzsarun/e74c116d17be50f69f08799769dff908.js"></script>

HTTPProxy `auth` จะถูก deploy ใน namespace `authentication` โดยจะทำการ route connection จาก `foo-basic.bar.com/auth` ไปยัง Service `authentication-home` ที่ port 80

รวมถึงเราสามารถกำหนด Conditions แยกในแต่ละ HTTPProxy ที่ Includes ไว้ใน Root-Proxy ได้ โดยใช้ `prefix` เช่นเดียวกับ HTTPProxy ปกติ. Connection จาก `foo-basic.bar.com/auth/cancel` จะถูก Route ไปที่ Service `authentication-cancellation` ที่ port 80

>สามารถเช็ค HTTPProxy ว่าตัวไหนเป็น Root ได้ที่ field `virtualhost`

**การใช้ Enable CORS**

![CORS](https://res.cloudinary.com/practicaldev/image/fetch/s--QkhVy_bZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jenik9atwnnnw815b8au.png)
*<https://dev.to/sandeepkumardev/fix-the-cors-and-how-the-access-control-allow-origin-header-works-17el>*


ถ้าเราต้องมีการใช้งาน [CORS หรือ Cross-origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) การมี Root HTTPProxy ก็สามารถช่วย Apply Config ไปทุก route รวมถึง include ที่อยู่ใต้ Root HTTPProxy

**ตัวอย่างการ Enable CORS**

<script src="https://gist.github.com/guyzsarun/99b63faac66c783ad0ebbc33b4f52d97.js"></script>

สามารถเปิดการใช้งาน CORS ได้ใน `corsPolicy` ซึ่งในตัวอย่างเป็นการเปิดทุก Origin ให้ใช้งานได้

สามารถอ่านถึง Methods, Header ต่างๆที่สามารถ Config ได้ที่

<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests>

## Summary
---
โดยสรุปแล้วการใช้ Root HTTPProxy จะช่วยให้ทีม Platform/Operator manage Ingress ที่ทีม Developer สร้างขึ้นในแต่ละ `namespace` ง่ายขึ้น รวมถึงยังสามารถ Route Traffic ไปยัง Service ที่ Deploy อยู่คนละ `namespace` ได้ครับรวมถึงช่วยการ Manage Application ที่เป็น Microservice Architecture

---

Useful Links:

[Contour project repository](https://github.com/projectcontour/contour)  
[Controlling Ingress with Contour](https://tanzu.vmware.com/developer/guides/controlling-ingress-with-contour/)
