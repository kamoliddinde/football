<template>
  <aside>
    <div class="aside-left">
      <button>
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="mt-8">
        <button>
          <i class="fa-solid fa-fire"></i>
        </button>
        <button>
          <i class="fa-solid fa-compass"></i>
        </button>
        <button>
          <i class="fa-solid fa-message"></i>
        </button>
      </div>
      <div class="px-5 my-5">
        <hr />
      </div>
      <div class="mt-5">
        <button><i class="fa-solid fa-soccer-ball"></i></button>
        <button><i class="fa-solid fa-basketball"></i></button>
        <button><i class="fa-solid fa-volleyball"></i></button>
        <button><i class="fa-solid fa-table-tennis-paddle-ball"></i></button>
        <button><i class="fa-solid fa-person-biking"></i></button>
      </div>
      <div class="mt-10">
        <button><i class="fa-solid fa-info-circle"></i></button>
        <button><i class="fa-solid fa-headset"></i></button>
      </div>
    </div>
    <div class="aside-right">
      <div class="flex items-center gap-2">
        <img
          class="w-6 h-6 object-contain"
          src="@/assets/img/Tvit.png"
          alt=""
        />
        <p class="text-lg">Onesport</p>
      </div>
      <div class="mt-10">
        <p class="text-[gray]">MENU</p>
        <RouterLink
          to="/"
          class="router-link"
          active-class="router-link-active"
        >
          <i class="fa-solid fa-house">
            <span> Dashboard </span>
          </i>
        </RouterLink>
        <RouterLink
          to="/"
          class="router-link"
        >
          <i class="fa-solid fa-video">
            <span> Live Football </span>
          </i>
        </RouterLink>
        <RouterLink
          to="/"
          class="router-link"
        >
          <i class="fa-solid fa-arrow-up-short-wide"></i>
          <span>Standings</span>
        </RouterLink>
        <RouterLink
          to="/"
          class="router-link"
        >
          <i class="fa-solid fa-highlighter"></i>
          <span>Highligh</span>
        </RouterLink>
        <RouterLink
          to="/"
          class="router-link"
        >
        <i class="fa-solid fa-store"></i>
          <span>Shop</span>
        </RouterLink>
        <RouterLink
          to="/"
          class="router-link"
        >
        <i class="fa-regular fa-newspaper"></i>
          <span>News</span>
        </RouterLink>
      </div>
    </div>
  </aside>
</template>
<style>
aside {
  display: flex;
  align-items: flex-start;
  height: 100vh;
  overflow: hidden;
  .aside-left {
    width: 72px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #d3d3d3;
    overflow-y: auto;
    button {
      width: 100%;
      text-align: center;
      padding-top: 12px 0;
      color: gray;
      font-size: 24px;
      cursor: pointer;
    }
  }
  .aside-right {
    width: 283px;
    height: 100%;
    border: 1px solid #d3d3d3;
    overflow-y: auto;
    padding: 24px;
    .router-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: gray;
      margin: 24px 0;
      width: 100%;
      i {
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
    }
    .router-link-active {
      color: #5742a9;
    }
  }
}
</style>
