# Быстрый старт umdu aux

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
    width: 300px;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
  }
  
  .ha-image-container {
    width: 482px;
    max-width: 100%;
    height: 224px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  
  .ha-image {
    max-width: 100%;
    object-fit: contain;
    object-position: center;
  }

  .umduaux-image {
    width: 300px;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
  }
  
  @media (max-width: 640px) {
    .flex-container {
      flex-direction: column;
    }
    
    .image-container, .content-container {
      width: 100%;
    }
    

    .umduaux-image {
      width: 100%;
      height: 350px;
    }
  }
</style>

## Понадобится

<div class="flex-container">
  <div class="image-container">
    <img class="umduaux-image" src="/images/umduaux.jpeg" alt="Необходимое оборудование">
  </div>
  <div class="content-container">
    <ul>
      <li>umdu aux</li>
      <li>Кондиционер с поддержкой внешнего WiFi модуля (<a href="models-aux">список поддерживаемых моделей</a>)</li>
      <li>Смартфон или планшет</li>
      <li>WiFi роутер</li>
    </ul>
  </div>
</div>

## Шаг 1 - Подключение к кондиционеру

<div class="flex-container">
  <div class="image-container">
    <img class="step-image" src="/images/aux-switch.png" alt="Переключатель режима">
  </div>
  <div class="content-container">
    <ul>
      <li>Перед подключением модуля к кондиционеру убедитесь, что переключатель переведен в положение AUX</li>
    </ul>
  </div>
</div>

::: tip Переключатель
Предназначен для переключения режима модуля из сервисного режима USB в режим UART для обеспечения связи с кондиционером.
:::

<div class="flex-container">
  <div class="image-container">
    <img class="step-image" src="/images/conditioner.jpg" alt="Шаг 1">
  </div>
  <div class="content-container">
    <ul>
      <li>Подключите umdu aux к кондиционеру согласно выбранному способу:
        <ul>
          <li><strong>4-проводное подключение (псевдо-USB):</strong> Используется USB-коннектор (только форма разъема, не USB протокол)
            <ul>
            </ul>
          </li>
          <li><strong>5-проводное подключение:</strong> Используйте специальный переходник, который можно приобрести или изготовить самостоятельно
            <ul>
            </ul>
          </li>
        </ul>
      </li>
      <li>Дождитесь инициализации модуля (пару минут)</li>
    </ul>
  </div>
</div>

::: warning Внимание
Инициализация модуля и загрузка веб сервера может занимать до 5 минут.
:::

## Шаг 2 - Настройка WiFi

<div class="flex-container">
  <div class="image-container">
    <img class="step-image" src="/images/wifi.png" alt="Шаг 2">
  </div>
  <div class="content-container">
    <ul>
      <li>Подключитесь к WiFi точки доступа umdu aux</li>
      <li>Откройте браузер и перейдите по адресу <a href="http://umduaux.local">umduaux.local</a></li>
      <li>Введите данные вашей WiFi сети</li>
      <li>Дождитесь успешного подключения (устройство подключится к вашей WiFi сети)</li>
    </ul>
  </div>
</div>

::: tip Пароль wifi
 Пароль от точки доступа wifi: `12345678`
:::
::: tip Логин
 Для входа в веб-интерфейс UMDU AUX используйте логин: `umdu`, пароль: `umdu`
:::

## Шаг 3 - Home Assistant

<div class="flex-container">
  <div class="image-container">
    <img class="ha-image" src="/images/esp.png" alt="Шаг 3">
  </div>
  <div class="content-container">
    <ul>
      <li><strong>Добавьте интеграцию:</strong>
        <ul>
          <li>Откройте Home Assistant</li>
          <li>Перейдите в раздел "Настройки" → "Устройства и службы"</li>
          <li>Нажмите "Добавить интеграцию"</li>
          <li>Нажмите "Выберите бренд ESPHome"</li>
          <li>Выберите "umdu aux"</li>
          <li>Или введите IP-адрес устройства или имя хоста: <a href="http://umduaux.local">umduaux.local</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>


::: warning Внимание
- При первом подключении к WiFi сети umdu aux может потребоваться несколько попыток
- Если <a href="http://umduaux.local">umduaux.local</a> не доступен, используйте IP-адрес, выданный устройству вашим роутером
- Убедитесь, что кондиционер поддерживает управление по WiFi
:::

## Дополнительно - Home Assistant

- Для получения дополнительной информации используйте базу знаний [Home Assistant](https://www.home-assistant.io/getting-started/).
- Посетите [Home Assistant Russia](https://t.me/homeassistant_russia) в Telegram
