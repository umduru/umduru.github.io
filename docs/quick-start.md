# Быстрый старт

<style>
  .flex-container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .image-container {
    flex-shrink: 0;
  }
  
  .content-container {
    flex: 1;
    min-width: 250px;
  }
  
  .step-image {
    max-width: 100%;
    height: auto;
  }
  
  .ha-image-container {
    width: 300px;
    max-width: 100%;
    height: 350px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  
  .ha-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  @media (max-width: 640px) {
    .flex-container {
      flex-direction: column;
    }
    
    .image-container, .content-container {
      width: 100%;
    }
    
    .ha-image-container {
      width: 100%;
      height: 350px;
    }
  }
</style>

## Понадобится

<div class="flex-container">
  <div class="image-container">
    <img class="step-image" src="/images/set.gif" alt="Необходимое оборудование">
  </div>
  <div class="content-container">
    <ul>
      <li>UMDU K1</li>
      <li>Блок питания</li>
      <li>Ethernet кабель</li>
      <li>Веб браузер, планшет или телефон.</li>
      <li>Маршрутизатор (роутер)</li>
    </ul>
  </div>
</div>

## Шаг 1 - Интернет

<div class="flex-container">
  <div class="image-container">
    <img class="step-image" src="/images/step1.gif" alt="Шаг 1">
  </div>
  <div class="content-container">
    <ul>
      <li>Подключите кабель Ethernet и убедитесь, что он зафиксирован на месте.</li>
      <li>Подключите другой конец кабеля Ethernet к маршрутизатору или коммутатору.</li>
    </ul>
  </div>
</div>

## Шаг 2 - Питание

<div class="flex-container">
  <div class="image-container">
    <img class="step-image" src="/images/step2.gif" alt="Шаг 2">
  </div>
  <div class="content-container">
    <ul>
      <li>Подключите кабель питания</li>
    </ul>
  </div>
</div>

## Шаг 3 - Home Assistant

<div class="flex-container">
  <div class="ha-image-container">
    <img class="ha-image" src="/images/HA.webp" alt="Шаг 3">
  </div>
  <div class="content-container">
    <ul>
      <li>Установите <strong>приложение.</strong>  
          Чтобы получить доступ к Home Assistant со своего мобильного устройства. Загрузить приложение можно в магазине приложений или по <a href="https://companion.home-assistant.io/">ссылке</a>.</li>
      <li><strong>Выберете сервер Home Assistant:</strong>
        <ul>
          <li>Мобильное приложение: подтвердите IP-адрес, обнаруженный приложением. Или введите имя хоста – <a href="http://umdu.local:8123">umdu.local:8123</a></li>
          <li>Браузер: посетите <a href="http://umdu.local:8123">umdu.local:8123</a>, чтобы получить доступ к пользовательскому интерфейсу Home Assistant.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

::: tip Логин
 Для входа в Home Assistant используйте логин: `umdu`, пароль: `umdu`
:::

::: warning Внимание
- Запуск Home Assistant может занимать до 5 минут.
- Если <a href="http://umdu.local:8123">umdu.local:8123</a> не доступен, используете IP адрес, выданный устройству вашим роутером (маршрутизатором). Например, 192.168.1.196:8123
:::

## Дополнительно - Home Assistant

- Для получения дополнительной информации используте базу знаний [Home Assistant](https://www.home-assistant.io/getting-started/).
- Посетите [Home Assistant Russia](https://t.me/homeassistant_russia) в Telegram
