# Быстрый старт umdu ot

<div class="page-quick-start-ot">

## Основной функционал umdu ot

- управлять котлом по `OpenTherm`;
- возвращать управление котлом на внешний термостат при пропадании питания модуля и при аварийном режиме;
- управлять внешней цепью через реле сухого контакта, например насосом или другим котлом в каскаде;
- принимать температуру от внешних датчиков и использовать ее в режимах `ПИД (PID)` и `ПЗА (Equiterm)`;
- интегрироваться с Home Assistant по `MQTT`, чтобы управлять котлом и видеть основные параметры из интерфейса Home Assistant.

## Индикация

- `PWR` — наличие питания модуля;
- `BLR` — состояние Байпас-реле, горит когда модуль управляет котлом;
- `RX` — прием данных по `OpenTherm`.

## Понадобится

<div class="flex-container">
  <div class="image-container">
    <img src="/images/umdu-ot-device.jpg" alt="umdu ot" class="step-image">
  </div>
  <div class="content-container">
    <ul>
      <li>umdu ot</li>
      <li>Источник питания <code>5V</code> с кабелем <code>USB-C</code></li>
      <li>Документация именно вашего котла</li>
      <li>Смартфон, планшет или компьютер с браузером</li>
      <li>Wi-Fi сеть</li>
      <li>Home Assistant с уже настроенным MQTT-брокером, если планируете интеграцию</li>
    </ul>
  </div>
</div>

## Шаг 1 - Подключение к котлу

<div class="flex-container">
  <div class="image-container">
    <img src="/images/umdu-ot-boiler-connection.jpg" alt="Подключение umdu ot к котлу" class="step-image">
  </div>
  <div class="content-container">
    <ul>
      <li>Полностью отключите питание котла и модуля перед подключением.</li>
      <li>Подключите котел к контактам <code>BOILER</code> на umdu ot.</li>
      <li>Если ранее использовался внешний термостат, подключите его к контактам <code>THERM</code> на umdu ot.</li>
    </ul>
  </div>
</div>

::: warning Внимание
Информацию о том, какие именно контакты `OpenTherm` использовать на стороне котла, смотрите в инструкции производителя котла.
:::

## Шаг 2 - Питание и первый вход

<div class="flex-container">
  <div class="image-container">
    <img src="/images/umdu-ot-power-first-start.jpg" alt="Питание umdu ot и первый запуск" class="step-image">
  </div>
  <div class="content-container">
    <ul>
      <li>Подайте питание <code>5V</code> через <code>USB-C</code>.</li>
      <li>Дождитесь загрузки модуля и web-интерфейса.</li>
      <li>При первом старте устройство поднимает точку доступа <code>umdu_ot</code>.</li>
      <li>Для входа в web-интерфейс модуля откройте в браузере адрес <a href="http://umduot.local">umduot.local</a> или дождитесь автоматического открытия портала для настройки подключения.</li>
    </ul>
  </div>
</div>

::: info Пароль точки доступа
<code>12345678</code>
:::

::: warning Внимание
Если <a href="http://umduot.local">umduot.local</a> не открывается, можно использовать <a href="http://192.168.4.1/">192.168.4.1</a>
:::

## Шаг 3 - Подключение к Wi-Fi

<div class="flex-container">
  <div class="image-container">
    <img class="step-image step-image-large" src="/images/umdu-ot-wifi-settings.png" alt="Настройки подключения Wi-Fi">
  </div>
  <div class="content-container">
    <ul>
      <li>В разделе <code>Сеть</code> нажмите <code>Настройки сети</code>.</li>
      <li>В <code>Доступные сети</code> найдите вашу сеть Wi-Fi.</li>
      <li>В <code>Настройки подключения</code> введите пароль для подключения к сети.</li>
      <li>Нажмите <code>Сохранить</code>.</li>
    </ul>
  </div>
</div>

::: info Примечание
После подключения к роутеру для входа в web-интерфейс можно использовать <a href="http://umduot.local">umduot.local</a> или IP-адрес, выданный устройству роутером.
:::

## Шаг 4 - Подключение к MQTT и Home Assistant

<div class="flex-container">
  <div class="image-container">
    <img class="step-image step-image-large" src="/images/umdu-ot-mqtt-settings.png" alt="Настройки MQTT">
  </div>
  <div class="content-container">
    <ul>
      <li>Перейдите в <code>Настройки</code>.</li>
      <li>Найдите <code>Настройки MQTT</code>.</li>
      <li>Поставьте чекбокс <code>Вкл</code>.</li>
      <li>Введите адрес сервера Home Assistant.</li>
      <li>Введите имя пользователя и пароль.</li>
      <li>Нажмите <code>Сохранить</code>.</li>
      <li>Проверьте Home Assistant: в MQTT должно появиться новое устройство <code>umdu_ot</code>.</li>
    </ul>
  </div>
</div>

::: warning Внимание
В Home Assistant заранее создайте отдельного пользователя Home Assistant для MQTT-подключения.
:::

::: info Пользователь в Home Assistant
Для этого в Home Assistant перейдите в <code>Настройки</code> -> <code>Люди</code> -> вкладка <code>Пользователи</code>, нажмите <code>Добавить пользователя</code>. Далее введите имя и пароль, например <code>ot</code>.
:::

## Дальше по настройке

- [Подключение внешних датчиков температуры](/umdu-ot-temperature-sensors)
- [Режимы работы реле сухого контакта K1](/umdu-ot-dry-contact)
- [Байпас-реле и аварийный режим](/umdu-ot-bypass-emergency)
- [Режимы управления отоплением: ПИД (PID) и ПЗА (Equiterm)](/umdu-ot-heating-modes)

</div>
