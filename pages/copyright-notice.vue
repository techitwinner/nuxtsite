<script setup lang="ts">
import {useLocalePath} from "#i18n";

const currentYear = new Date().getFullYear()
const {t} = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="ct">
    <section class="page-main">
      <div class="main-child">
        <PageHeading title="Copyright Notices" sub-title="This page blablablabla"/>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child-start gap-6 flex">
        <p>
          <strong class="font-serif text-2xl">&copy; 2023 - {{currentYear}} Techit Thawiang, All right reserved.</strong><br/>
        </p>
        <p>
          This website and its contents, including but not limited to the logo, original code, design, text, images, and other materials created by Techit Thawiang are the intellectual property of Techit Thawiang and are protected under applicable copyright laws. Unauthorized use of any of these materials without prior permission is prohibited.
        </p>
        <p>
          <strong class="font-serif text-2xl">Logo Usage</strong><br/>
          The Logo that are all inside <LazyNuxtLink class="link link-info" target="_blank" :href="localePath('/files/images/logos/techit.win')">this folder</LazyNuxtLink> is protected and may not be used as a primary logo by any third party. However, it may be used for commercial purposes with express permission, provided it acknowledges the original creator and is not the primary branding identity of the third party.
        </p>
        <p>
          <strong class="font-serif text-2xl">Website Code</strong><br/>
          The source code of this website is made available under the MIT License <LazyNuxtLink class="link link-info" target="_blank" href="https://github.com/techitwinner/nuxtsite">here</LazyNuxtLink>, permitting anyone to use, modify, and distribute the code for personal or commercial projects, provided the original license and copyright notices are retained. This applies solely to the website's code and does not extend to design elements, images, or content.
        </p>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child-start gap-6 flex">
        <p>
          <strong class="font-serif text-2xl">&copy; 2023 - {{currentYear}} เตชิต ทาเวียง, สงวนสิทธิ์ทุกประการ</strong><br/>
        </p>
        <p>
          เว็บไซต์นี้และเนื้อหาทั้งหมด รวมถึงแต่ไม่จำกัดเพียงโลโก้ โค้ดต้นฉบับ การออกแบบ ข้อความ รูปภาพ และสื่ออื่นๆ ที่สร้างโดย เตชิต ทาเวียง เป็นทรัพย์สินทางปัญญาของ เตชิต ทาเวียง และได้รับการคุ้มครองภายใต้กฎหมายลิขสิทธิ์ที่เกี่ยวข้อง ห้ามใช้สื่อเหล่านี้โดยไม่ได้รับอนุญาตก่อน</p>
        <p>
          <strong class="font-serif text-2xl">การใช้งานโลโก้</strong><br/>
          โลโก้ทั้งหมดที่อยู่ใน <LazyNuxtLink class="link link-info" target="_blank" :href="localePath('/files/images/logos/techit.win')">โฟลเดอร์นี้</LazyNuxtLink> ได้รับการปกป้องและไม่อาจใช้เป็นโลโก้หลักโดยบุคคลที่สามได้ อย่างไรก็ตาม สามารถใช้โลโก้เพื่อวัตถุประสงค์ทางการค้าได้โดยต้องได้รับอนุญาตอย่างชัดเจน โดยต้องระบุผู้สร้างดั้งเดิมและไม่ถือเป็นเอกลักษณ์แบรนด์หลักของบุคคลที่สาม        </p>
        <p>
          <strong class="font-serif text-2xl">โค้ดของเว็บไซต์นี้</strong><br/>
          ซอร์สโค้ดของเว็บไซต์นี้เผยแพร่ภายใต้ใบอนุญาต MIT <LazyNuxtLink class="link link-info" target="_blank" href="https://github.com/techitwinner/nuxtsite">ที่นี่</LazyNuxtLink> อนุญาตให้ทุกคนใช้ แก้ไข และแจกจ่ายโค้ดสำหรับโครงการส่วนตัวหรือเชิงพาณิชย์ โดยต้องคงใบอนุญาตและประกาศลิขสิทธิ์ดั้งเดิมไว้ ใบอนุญาตนี้ใช้กับโค้ดของเว็บไซต์เท่านั้น และไม่ขยายไปถึงองค์ประกอบการออกแบบ รูปภาพ หรือเนื้อหา        </p>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child-start gap-6 flex">
        <p>
          <strong class="font-serif text-2xl">&copy; 2023 - {{currentYear}} Techit Thawiang, Alle Rechte vorbehalten.</strong><br/>
        </p>
        <p>
          Diese Website und ihre Inhalte, einschließlich, aber nicht beschränkt auf das Logo, den Originalcode, das Design, den Text, die Bilder und andere von Techit Thawiang erstellte Materialien, sind geistiges Eigentum von Techit Thawiang und durch geltende Urheberrechtsgesetze geschützt. Die unbefugte Verwendung dieser Materialien ohne vorherige Genehmigung ist untersagt.
        </p>
        <p>
          <strong class="font-serif text-2xl">Logo-Verwendung</strong><br/>
          Die Logos, die sich alle in <LazyNuxtLink class="link link-info" target="_blank" :href="localePath('/files/images/logos/techit.win')">diesem Ordner</LazyNuxtLink> befinden, sind geschützt und dürfen von Dritten nicht als primäres Logo verwendet werden. Sie dürfen jedoch mit ausdrücklicher Genehmigung für kommerzielle Zwecke verwendet werden, sofern der ursprüngliche Ersteller erwähnt wird und es sich nicht um die primäre Markenidentität des Dritten handelt.
        </p>
        <p>
          <strong class="font-serif text-2xl">Website-Code</strong><br/>
          Der Quellcode dieser Website wird unter der MIT-Lizenz <LazyNuxtLink class="link link-info" target="_blank" href="https://github.com/techitwinner/nuxtsite">hier</LazyNuxtLink> zur Verfügung gestellt, sodass jeder den Code für persönliche oder kommerzielle Projekte verwenden, ändern und verteilen kann, sofern die ursprünglichen Lizenz- und Copyright-Hinweise erhalten bleiben. Dies gilt ausschließlich für den Code der Website und erstreckt sich nicht auf Designelemente, Bilder oder Inhalte.
        </p>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child-start gap-6 flex">
        <p>
          <strong class="font-serif text-2xl">&copy; 2023 - {{currentYear}} Techit Thawiang，保留所有权利。</strong><br/>
        </p>
        <p>
          本网站及其内容，包括但不限于 Techit Thawiang 创建的徽标、原始代码、设计、文本、图像和其他材料，均为 Techit Thawiang 的知识产权，受适用的版权法保护。未经事先许可，禁止擅自使用任何这些材料。
        </p>
        <p>
          <strong class="font-serif text-2xl">徽标使用</strong><br/>
          <LazyNuxtLink class="link link-info" target="_blank" :href="localePath('/files/images/logos/techit.win')">此文件夹</LazyNuxtLink> 内的所有徽标均受保护，不得被任何第三方用作主要徽标。但是，在获得明确许可的情况下，可以将其用于商业目的，前提是它承认原始创作者并且不是第三方的主要品牌标识。
        </p>
        <p>
          <strong class="font-serif text-2xl">网站代码</strong><br/>
          本网站的源代码根据 MIT 许可证提供<LazyNuxtLink class="link link-info" target="_blank" href="https://github.com/techitwinner/nuxtsite">此处</LazyNuxtLink>，允许任何人使用、修改和分发代码用于个人或商业项目，前提是保留原始许可证和版权声明。这仅适用于网站的代码，不适用于设计元素、图像或内容。
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>