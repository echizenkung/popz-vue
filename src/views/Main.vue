<template>
  <NuxtLayout name="default">
    <section :key="'section'">
      <section v-if="!$isMobile()">
        <VideoZoomOutIsDesktop />
      </section>
      <section v-else>
        <VideoZoomOutIsMobile />
      </section>
      <div class="mt-8 lg:mt-2 text">
        <div class="flex justify-center">
          <h2 class="text-[#ED7638] text-[1.2rem] font-normal">
            PG SLOT เว็บที่รวมเกมสล็อตแตกง่ายที่เยอะที่สุด
          </h2>
        </div>
        <div class="flex justify-center">
          <div class="lg:w-[40%] md:w-[100%] text-center text-white">
            ยินดีต้อนรับเข้าสู่เว็บ pg slot ที่รวมเกมสล็อตแตกง่ายที่เยอะที่สุด เล่น สล็อตpg เว็บตรง
            ได้สะดวกและปลอดภัย บริการครบวงจรที่สุด พร้อมเกมหลากหลายที่มีให้เลือกเล่นอย่างจุใจเพียบ
            ให้ทุกวันที่นี้ มีมากกว่าความสนุกแน่นอน! กับเว็บยอดนิยม
            ที่คนบอกต่อและชวนเพื่อนมาเล่นเยอะที่สุด
            มาร่วมเป็นส่วนหนึ่งในชุมชนสล็อตออนไลน์ที่ใหญ่ที่สุดได้แล้ววันนี้ สมัครเลย!
          </div>
        </div>
      </div>
      <div class="mt-8">
        <img src="../assets/banner-slot-2-1.png" alt="maquee-cover" class="w-[100%]" />
      </div>
      <div class="mt-4 game-slide">
        <infinite-slide-bar duration="60s">
          <div class="flex gap-4">
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/dragon-hatch/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/candy-bonanza/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/crypto-gold/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/bali-vacation/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/circus-delight/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/cai-shen-wins/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/captains-bounty/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/dragon-hatch/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/candy-bonanza/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/crypto-gold/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/bali-vacation/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/circus-delight/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/cai-shen-wins/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/captains-bounty/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/dragon-hatch/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/candy-bonanza/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/crypto-gold/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/bali-vacation/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
          </div>
        </infinite-slide-bar>
      </div>
      <div class="mt-4 game-slide">
        <infinite-slide-bar duration="60s" direction="reverse">
          <div class="flex gap-4">
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/hip-hop-panda/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/fortune-ox/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/galactic-gems/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/dragon-legend/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/ganesha-gold/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/journey-to-the-wealth/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/genies-wishes/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/hip-hop-panda/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/fortune-ox/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/galactic-gems/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/ganesha-gold/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/journey-to-the-wealth/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/genies-wishes/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/hip-hop-panda/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/fortune-ox/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/galactic-gems/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/dragon-legend/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
          </div>
        </infinite-slide-bar>
      </div>
      <div class="mt-4 game-slide">
        <infinite-slide-bar duration="60s">
          <div class="flex gap-4">
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/shaolin-soccer/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/sct-cleopatra/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/medusa/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/wild-fireworks/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/queen-bounty/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/vampires-charm/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/shaolin-soccer/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/sct-cleopatra/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/medusa/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/wild-fireworks/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/queen-bounty/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/vampires-charm/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/shaolin-soccer/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/sct-cleopatra/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/medusa/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
            <div class="gap-4 card w-[170px] h-[100px] lg:w-[410px] lg:h-[200px] bg-base-100">
              <img
                src="https://assets.pigspin.com/assets/PG/wild-fireworks/maquee-cover.jpg"
                alt="maquee-cover"
                class="rounded-lg"
              />
            </div>
          </div>
        </infinite-slide-bar>
      </div>

      <div class="flex justify-center mt-8">
        <div
          class="shadow-xl card w-96 bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-neutral-content"
        >
          <div class="items-center text-center text-white card-body">
            <h2 class="card-title text-[1.7279166667rem]">สมัครง่าย</h2>
            <p class="text-[1.4141666667rem]">แค่ใช้เบอร์มือถือและบัญชีธนาคาร</p>
            <div class="justify-end mt-2 card-actions">
              <a href="https://m.popslot.bet/login?action=register" class="no-underline">
                <button class="rounded-full btn text-[#f0c373]">สมัครสมาชิกเลย!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="container py-2 mx-auto lg:w-[60%] w-[100%] p-4 lg:p-10">
          <div class="grid mt-8 justify-items-stretch">
            <h2 class="text-[#ED7638] text-[40px] font-normal justify-self-center">โปรโมชั่น</h2>
            <div
              v-for="(data, index) in posts"
              :key="index"
              class="items-center justify-center w-full mb-4"
            >
              <figure>
                <img :src="data.url_img" :alt="data.title.rendered" class="rounded-lg" />
              </figure>
            </div>
          </div>
          <div class="flex justify-center mt-4">
            <button
              class="rounded-full btn btn-outline bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-white border-none shadow-xl"
            >
              โปรโมชั่นทั้งหมด
            </button>
          </div>
          <div class="mt-8 service">
            <h2 class="text-[24px] lg:text-[40px] font-normal justify-self-center text-[#ed7638]">
              บริการของเรา
            </h2>
            <p class="text-white">
              เว็บสล็อตออนไลน เว็บตรงที่พร้อมให้บริการ 24 ชม. เติม-ถอน อัตโนมัติ สะดวก รวดเร็ว
              ปลอดภัย
            </p>
            <div class="grid grid-cols-2 gap-8 mt-4 lg:grid-cols-4">
              <div class="justify-self-center">
                <div class="flex items-center justify-center mb-2">
                  <img src="../assets/serviec-1.png" class="rounded-lg w-[100px] lg:w-[150px]" />
                </div>
                <p class="text-center text-white text-[14px]">เติม-ถอน อัตโนมัติ</p>
                <p class="text-center text-white text-[12px]">ปลอดภัย เข้าไว เพียงไม่กี่วินาที</p>
              </div>
              <div class="justify-self-center">
                <div class="flex items-center justify-center mb-2">
                  <img src="../assets/serviec-2.png" class="rounded-lg w-[100px] lg:w-[150px]" />
                </div>
                <p class="text-center text-white text-[14px]">ทรู วอลเล็ท</p>
                <p class="text-center text-white text-[12px]">อีกทางเลือกของการเติม-ถอน</p>
              </div>
              <div class="justify-self-center">
                <div class="flex items-center justify-center mb-2">
                  <img src="../assets/serviec-3.png" class="rounded-lg w-[100px] lg:w-[150px]" />
                </div>
                <p class="text-center text-white text-[14px]">เกมสนุกกว่า 300 เกม</p>
                <p class="text-center text-white text-[12px]">กำลังรอคุณอยู่</p>
              </div>
              <div class="justify-self-center">
                <div class="flex items-center justify-center mb-2">
                  <img src="../assets/serviec-4.png" class="rounded-lg w-[100px] lg:w-[150px]" />
                </div>
                <p class="text-center text-white text-[14px]">พร้อมบริการ</p>
                <p class="text-center text-white text-[12px]">ตลอด 24 ชั่วโมง</p>
              </div>
            </div>
            <div class="flex justify-center mt-4">
              <a href="https://m.popslot.bet/login?action=register" class="no-underline">
                <button
                  class="rounded-full btn btn-outline bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-white border-none shadow-xl"
                >
                  สมัครสมาชิกเลย!
                </button>
              </a>
            </div>
          </div>
          <div class="mt-10">
            <div>
              <h4 class="wp-block-heading has-text-align-left">
                <mark
                  style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                  class="has-inline-color"
                  >PG SLOT ความท้าทายและความตื่นเต้นในโลกของ เกมสล็อตออนไลน์</mark
                >
              </h4>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  ><strong>PG SLOT</strong>
                  เป็นความท้าทายที่ท้าให้คุณได้ลองและค้นพบความสนุกและความตื่นเต้นในโลกของเกม
                  สล็อตออนไลน์ ที่ไม่มีที่สิ้นสุด ด้วย นวัตกรรม ที่ท้าทายและคับคั่งไปด้วยรางวัล
                  แจ็คพ็อต ที่พร้อมให้คุณได้ ลุ้นโชค กันตลอดวัน ซึ่ง SLOT PG
                  เป็นที่รู้จักและรู้สึกตื่นเต้นทุกครั้งที่หมุนวงล้อ</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >เพื่อเริ่มต้นในโลกของ PG </mark
                ><strong
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    >สล็อตเว็บตรง</mark
                  ></strong
                ><mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                >
                  คุณจะต้องเตรียมพร้อมที่จะในการเล่นเกมของคุณ ด้วยความ ท้าทาย
                  ที่น่าตื่นเต้นนี้จะทำให้คุณสนุก ลุ้นระทึก ในทุกครั้งที่คุณหมุนวงล้อ
                  และจงเตรียมพร้อมให้ตัวเองพบกับ รางวัล แจ็คพ็อต
                  ที่จะทำให้คุณสมหวังและมีความสนุกที่ไม่มีที่สิ้นสุด</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >ในโลกของ เกมสล็อต PG ที่เปิดรับให้กับทุก ๆ โอกาสที่มีให้คุณ
                  ไม่ว่าคุณจะเป็นผู้เล่นประจำหรือใหม่ ทุกวันจะเป็นการเรียนรู้และความสนุกในการเล่น
                  เกมสล็อตของค่าย PG </mark
                ><strong
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    >สล็อตแตกง่าย</mark
                  ></strong
                ><mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                >
                  ที่ไม่มีที่สิ้นสุดที่ให้คุณได้พบความ ท้าทาย ระทึก ไปกับรายการรางวัล แจ็คพ็อต
                  อย่างไม่รู้จบทุก ๆ วินาที</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >พบกับความท้าทายและความตื่นเต้นในโลกของการ เดิมพันออนไลน์ ผ่าน เกมสล็อต
                  ที่มาพร้อมเงินรางวัลก้อนโตและพร้อมให้คุณเปิดสู่ประสบการณ์ในระดับใหม่ของความ ท้าทาย
                  และความตื่นเต้นในการเล่นเกม สล็อตออนไลน์ ในปัจจุบัน</mark
                >
              </p>

              <h4 class="wp-block-heading">
                <mark
                  style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                  class="has-inline-color"
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    ><mark
                      style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                      class="has-inline-color"
                      ><mark
                        style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                        class="has-inline-color"
                        >PG SLOT เต็มอิ่มไปกับรายการเกมมากมายพร้อม กราฟฟิก ที่เป็นเอกลักษณ์</mark
                      ></mark
                    ></mark
                  ></mark
                >
              </h4>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >เมื่อพูดถึง <strong>PG SLOT</strong> ความสวยงามของ กราฟฟิก
                  เป็นสิ่งที่คนทุกคนต้องชื่นชม แทบจะไม่มี เกมสล็อต ใดที่มาพร้อมกับ กราฟฟิก
                  ที่น่าประทับใจและเป็นเอกลักษณ์เหมือน
                  <strong>PG SLOT</strong>
                  และสิ่งที่ทำให้เกมนี้น่าสนใจมากขึ้นไม่ได้แค่อยู่ที่ความสวยงามของภาพแต่ยังอยู่ที่ความสมจริงในการเล่นเกม</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >กราฟฟิก ใน </mark
                ><strong
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    >เว็บสล็อตออนไลน์</mark
                  ></strong
                ><mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                >
                  แห่งนี้มีลวดลายที่ดูอลังการและสีสันที่สวยงาม การออกแบบ สัญลักษณ์
                  และรายละเอียดของเกมถูกสร้างขึ้นอย่างประณีต ทุก ๆ
                  รอบของการหมุนวงล้อเหมือนกับเดินเข้าสู่โลกแห่งความสวยงามที่สร้างความพึงพอใจและความตื่นเต้น
                  ด้วย กราฟฟิก
                  ที่สวยงามนี้เติมเต็มประสบการณ์การเล่นของคุณด้วยรายละเอียดที่ยากต่อการลืม</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >แต่ไม่เพียงแค่ กราฟฟิก ที่ทำให้ </mark
                ><strong
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    >สล็อตเว็บตรง</mark
                  ></strong
                ><mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                >
                  PG มีความน่าสนใจมากขึ้น ยังมีการออกแบบเสียงและ เอฟเฟกต์
                  ที่มีคุณภาพสูงที่เติมเต็มประสบการณ์ในขณะเล่นอีกด้วย ด้วยเสียงดนตรีที่น่าสนใจและ
                  เอฟเฟกต์ ที่น่าสนใจช่วยเพิ่มความตื่นเต้นขณะคุณ หมุนวงล้อ และรอคอยผลลัพธ์ที่รางวัล
                  ที่การออกแบบเสียง เอฟเฟกต์ ที่ทำให้ผู้เล่นมีความเพลิดเพลิน
                  พึงพอใจและประสบการณ์การเล่นที่น่าจดจำ น่าติดตามในทุก ๆ
                  ครั้งที่เข้าร่วมในการเล่นจนคุณไม่อยากวางจอ</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >SLOT PG จะทำให้คุณได้ประสบการณ์การเล่น สล็อต ที่สมจริง, น่าสนใจ, และน่าตื่นเต้น
                  ด้วยความสวยงามของ กราฟฟิก และประสบการณ์การเล่นที่ เติมเต็ม
                  ความพึงพอใจและความสนุกให้ผู้เล่นในทุกการหมุนวงล้อ ไม่ว่าคุณเป็น นักเดิมพันมืออาชีพ
                  หรือ นักเดิมพันมือใหม่ ก็คงไม่อาจปฏิเสธ
                  <strong>PG SLOT</strong> ที่จะทำให้คุณตกหลุมรักในโลกของ สล็อตออนไลน์
                  ในแบบที่ไม่เหมือนใคร</mark
                >
              </p>

              <h4 class="wp-block-heading">
                <mark
                  style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                  class="has-inline-color"
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    ><mark
                      style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                      class="has-inline-color"
                      ><mark
                        style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                        class="has-inline-color"
                        ><mark
                          style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                          class="has-inline-color"
                          ><mark
                            style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                            class="has-inline-color"
                            ><mark
                              style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                              class="has-inline-color"
                              ><mark
                                style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                class="has-inline-color"
                                >PG SLOT ลุ้นระทึก ไปกับทุกความมันส์กับรางวัล แจ็คพ็อต มากมาย</mark
                              ></mark
                            ></mark
                          ></mark
                        ></mark
                      ></mark
                    ></mark
                  ></mark
                >
              </h4>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >เกินต้าน ต่อความตื่นเต้นและรางวัลใหญ่ในโลกของ </mark
                ><strong
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    >เว็บสล็อตออนไลน์</mark
                  ></strong
                ><mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                >
                  กับรางวัล แจ็คพ็อต ที่ SLOT PG มีมากมายแน่นอนจะทำให้คุณหลงรัก ซึ่งรายการ แจ็คพ็อต
                  เป็นที่คาดหวังของผู้เล่นหลาย ๆ คน
                  เนื่องจากมันไม่เพียงแค่เสมือนเป้าหมายที่มากขึ้นเรื่อย ๆ
                  แต่ยังเป็นจุดเปลี่ยนที่สามารถเปลี่ยนแปลงชีวิตของคุณอย่างสิ้นเชิง</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >และ แจ็คพ็อต <strong>PG SLOT</strong> เป็นที่ ๆ เหล่า นักแสวงโชค
                  มองหาโอกาสที่สะสมมากมายในทุก ๆ การปั่น ฟรีสปิน ที่พร้อมให้คุณเพลิดเพลิน
                  เร้าใจในทุก ๆ รอบ</mark
                >
              </p>

              <h4 class="wp-block-heading">
                <mark
                  style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                  class="has-inline-color"
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    ><mark
                      style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                      class="has-inline-color"
                      ><mark
                        style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                        class="has-inline-color"
                        ><mark
                          style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                          class="has-inline-color"
                          ><mark
                            style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                            class="has-inline-color"
                            ><mark
                              style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                              class="has-inline-color"
                              ><mark
                                style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                class="has-inline-color"
                                ><mark
                                  style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                  class="has-inline-color"
                                  ><mark
                                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                    class="has-inline-color"
                                    ><mark
                                      style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                      class="has-inline-color"
                                      ><mark
                                        style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                        class="has-inline-color"
                                        ><mark
                                          style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                          class="has-inline-color"
                                          ><mark
                                            style="
                                              background-color: rgba(0, 0, 0, 0);
                                              color: #ed7638;
                                            "
                                            class="has-inline-color"
                                            ><mark
                                              style="
                                                background-color: rgba(0, 0, 0, 0);
                                                color: #ed7638;
                                              "
                                              class="has-inline-color"
                                              ><mark
                                                style="
                                                  background-color: rgba(0, 0, 0, 0);
                                                  color: #ed7638;
                                                "
                                                class="has-inline-color"
                                                >แจ็คพ็อต PG SLOT โอกาสที่ไม่มีที่สิ้นสุด</mark
                                              ></mark
                                            ></mark
                                          ></mark
                                        ></mark
                                      ></mark
                                    ></mark
                                  ></mark
                                ></mark
                              ></mark
                            ></mark
                          ></mark
                        ></mark
                      ></mark
                    ></mark
                  ></mark
                >
              </h4>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >ที่คุณจะพบกับ แจ็คพ็อต ใน PG </mark
                ><strong
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    >สล็อตแตกง่าย</mark
                  ></strong
                ><mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                >
                  ซึ่งจะเป็นที่ที่คุณสามารถมองหาโอกาสที่ไม่มีที่สิ้นสุดกับการถูกรางวัล แจ็คพ็อต
                  อย่างไม่รู้จบด้วยความตื่นเต้นและรางวัลที่ติดต่อกันอย่างไม่ขาดไม่สาย
                  ที่ที่คุณอาจพบกับโอกาสในการเป็น เศรษฐี ได้อย่างง่ายดาย</mark
                >
              </p>

              <h4 class="wp-block-heading">
                <mark
                  style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                  class="has-inline-color"
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    ><mark
                      style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                      class="has-inline-color"
                      ><mark
                        style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                        class="has-inline-color"
                        ><mark
                          style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                          class="has-inline-color"
                          ><mark
                            style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                            class="has-inline-color"
                            ><mark
                              style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                              class="has-inline-color"
                              ><mark
                                style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                class="has-inline-color"
                                ><mark
                                  style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                  class="has-inline-color"
                                  ><mark
                                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                    class="has-inline-color"
                                    ><mark
                                      style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                      class="has-inline-color"
                                      ><mark
                                        style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                        class="has-inline-color"
                                        ><mark
                                          style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                                          class="has-inline-color"
                                          ><mark
                                            style="
                                              background-color: rgba(0, 0, 0, 0);
                                              color: #ed7638;
                                            "
                                            class="has-inline-color"
                                            ><mark
                                              style="
                                                background-color: rgba(0, 0, 0, 0);
                                                color: #ed7638;
                                              "
                                              class="has-inline-color"
                                              ><mark
                                                style="
                                                  background-color: rgba(0, 0, 0, 0);
                                                  color: #ed7638;
                                                "
                                                class="has-inline-color"
                                                ><mark
                                                  style="
                                                    background-color: rgba(0, 0, 0, 0);
                                                    color: #ed7638;
                                                  "
                                                  class="has-inline-color"
                                                  ><mark
                                                    style="
                                                      background-color: rgba(0, 0, 0, 0);
                                                      color: #ed7638;
                                                    "
                                                    class="has-inline-color"
                                                    ><mark
                                                      style="
                                                        background-color: rgba(0, 0, 0, 0);
                                                        color: #ed7638;
                                                      "
                                                      class="has-inline-color"
                                                      ><mark
                                                        style="
                                                          background-color: rgba(0, 0, 0, 0);
                                                          color: #ed7638;
                                                        "
                                                        class="has-inline-color"
                                                        ><mark
                                                          style="
                                                            background-color: rgba(0, 0, 0, 0);
                                                            color: #ed7638;
                                                          "
                                                          class="has-inline-color"
                                                          ><mark
                                                            style="
                                                              background-color: rgba(0, 0, 0, 0);
                                                              color: #ed7638;
                                                            "
                                                            class="has-inline-color"
                                                            ><mark
                                                              style="
                                                                background-color: rgba(0, 0, 0, 0);
                                                                color: #ed7638;
                                                              "
                                                              class="has-inline-color"
                                                              ><mark
                                                                style="
                                                                  background-color: rgba(
                                                                    0,
                                                                    0,
                                                                    0,
                                                                    0
                                                                  );
                                                                  color: #ed7638;
                                                                "
                                                                class="has-inline-color"
                                                                ><mark
                                                                  style="
                                                                    background-color: rgba(
                                                                      0,
                                                                      0,
                                                                      0,
                                                                      0
                                                                    );
                                                                    color: #ed7638;
                                                                  "
                                                                  class="has-inline-color"
                                                                  ><mark
                                                                    style="
                                                                      background-color: rgba(
                                                                        0,
                                                                        0,
                                                                        0,
                                                                        0
                                                                      );
                                                                      color: #ed7638;
                                                                    "
                                                                    class="has-inline-color"
                                                                    ><mark
                                                                      style="
                                                                        background-color: rgba(
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0
                                                                        );
                                                                        color: #ed7638;
                                                                      "
                                                                      class="has-inline-color"
                                                                      ><mark
                                                                        style="
                                                                          background-color: rgba(
                                                                            0,
                                                                            0,
                                                                            0,
                                                                            0
                                                                          );
                                                                          color: #ed7638;
                                                                        "
                                                                        class="has-inline-color"
                                                                        ><mark
                                                                          style="
                                                                            background-color: rgba(
                                                                              0,
                                                                              0,
                                                                              0,
                                                                              0
                                                                            );
                                                                            color: #ed7638;
                                                                          "
                                                                          class="has-inline-color"
                                                                          ><mark
                                                                            style="
                                                                              background-color: rgba(
                                                                                0,
                                                                                0,
                                                                                0,
                                                                                0
                                                                              );
                                                                              color: #ed7638;
                                                                            "
                                                                            class="has-inline-color"
                                                                            ><mark
                                                                              style="
                                                                                background-color: rgba(
                                                                                  0,
                                                                                  0,
                                                                                  0,
                                                                                  0
                                                                                );
                                                                                color: #ed7638;
                                                                              "
                                                                              class="has-inline-color"
                                                                              ><mark
                                                                                style="
                                                                                  background-color: rgba(
                                                                                    0,
                                                                                    0,
                                                                                    0,
                                                                                    0
                                                                                  );
                                                                                  color: #ed7638;
                                                                                "
                                                                                class="has-inline-color"
                                                                                >สะสมความมันส์และรางวัลใหญ่</mark
                                                                              ></mark
                                                                            ></mark
                                                                          ></mark
                                                                        ></mark
                                                                      ></mark
                                                                    ></mark
                                                                  ></mark
                                                                ></mark
                                                              ></mark
                                                            ></mark
                                                          ></mark
                                                        ></mark
                                                      ></mark
                                                    ></mark
                                                  ></mark
                                                ></mark
                                              ></mark
                                            ></mark
                                          ></mark
                                        ></mark
                                      ></mark
                                    ></mark
                                  ></mark
                                ></mark
                              ></mark
                            ></mark
                          ></mark
                        ></mark
                      ></mark
                    ></mark
                  ></mark
                >
              </h4>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  ><strong>PG SLOT</strong> ไม่เพียงแค่เป็นสถานที่ที่คุณสามารถสะสม แจ็คพ็อต
                  ได้อย่างเพลิดเพลิน แต่ยังมาพร้อมกับความมันส์และความเร้าใจที่ไม่มีที่สิ้นสุด
                  ทุกการหมุน ฟรีสปิน ที่อาจเป็นโอกาสในการชนะ เงินรางวัลก้อนโต
                  ที่รอคอยคุณให้ลองและสัมผัสไปกับประสบการณ์ความสนุกที่ไม่มีที่สิ้นสุดเริ่มต้นที่นี่</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >พบกับโอกาสที่ไม่มีที่สิ้นสุดและเป็น ผู้พิชิต เงินรางวัลก้อนโตกับ แจ็คพ็อต PG </mark
                ><strong
                  ><mark
                    style="background-color: rgba(0, 0, 0, 0); color: #ed7638"
                    class="has-inline-color"
                    >สล็อตเว็บตรง</mark
                  ></strong
                ><mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                >
                  ที่สะสมมากมาย รวยขึ้นด้วยทุก ๆ การหมุน ฟรีสปิน ที่จะทำให้คุณกลายเป็น ผู้โชคดี
                  ที่มี รายได้ อย่างไม่มีขีดจำกัด</mark
                >
              </p>

              <p>
                <mark
                  style="background-color: rgba(0, 0, 0, 0)"
                  class="has-inline-color has-white-color"
                  >หากคุณต้องการความมันส์และโอกาสที่ไม่มีที่สิ้นสุดกับรายการรางวัล แจ็คพ็อต
                  มากมายที่<strong>PG SLOT</strong> คือที่ที่คุณไม่ควรพลาด มาร่วมผจญภัยในโลกของการ
                  เดิมพันออนไลน์ ที่แสนสนุกสุดและลุ้น ระทึก
                  ไปกับเงินรางวัลใหญ่มากมายที่นี่ที่จะเปลี่ยนชีวิตคุณไปตลอด</mark
                >
              </p>

              <div
                class="wp-block-columns is-layout-flex wp-container-2 wp-block-columns-is-layout-flex"
              >
                <div
                  class="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                ></div>
              </div>
            </div>
          </div>
          <div class="mt-10 post">
            <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div
                v-for="(data, index) in posts"
                :key="index"
                class="items-center justify-center w-full mx-1 duration-300 bg-black rounded-lg cursor-pointer hero_div hover:scale-90 hover:bg-black"
              >
                <figure>
                  <img :src="data.url_img" :alt="data.title.rendered" class="rounded-lg" />
                </figure>
                <div class="p-2 card-body">
                  <p class="text-[11.5px] md:text-[18px] text-center text-white">
                    {{ data.title.rendered }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-4">
              <button
                class="rounded-full btn btn-outline bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-white border-none shadow-xl"
              >
                บทความทั้งหมด
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import VideoZoomOutIsDesktop from '../components/VideoZoomOutIsDesktop.vue'
import VideoZoomOutIsMobile from '../components/VideoZoomOutIsMobile.vue'
import InfiniteSlideBar from 'vue3-infinite-slide-bar'
import axios from 'axios'
const posts = reactive([])
const contentJson = ref('')
onMounted(async () => {
  await axios
    .get(
      `https://wordpress-704245-3836348.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories=3&per_page=10`
    )
    .then((response) => {
      for (const data of response.data) {
        posts.push({
          ...data,
          url_img: data._embedded['wp:featuredmedia'][0].source_url
        })
      }
    })
})
</script>
<style scoped></style>
