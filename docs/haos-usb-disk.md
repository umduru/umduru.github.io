# Запуск с внешнего USB диска

Для загрузки Home Assistant с внешнего USB‑диска необходимо обновить загрузчик U‑Boot в SPI‑памяти устройства. Для этого используется дополнение (Add‑on) «Umdu SPI U‑Boot Flasher».

## Понадобится

- Сервер umdu k1
- Любой накопитель, подключаемый по USB (SSD/HDD/флешка)
- Переходник/корпус USB–SATA для SSD/HDD (при необходимости)
 - Компьютер для записи образа
 - Образ HAOS – [скачать](https://github.com/umduru/umdu-haos-updater/releases/download/16.2/haos_umdu-k1-16.2.img.xz)
 - ПО balenaEtcher – [скачать](https://www.balena.io/etcher)
- Резервная копия Home Assistant и ключ шифрования (если включено)

## Установка дополнения

Добавьте этот репозиторий в Home Assistant Supervisor:

[![Добавить репозиторий](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fumduru%2Fumdu-k1-uboot)

Или добавьте репозиторий вручную:

1. В Home Assistant перейдите в **Настройки > Дополнения > Магазин дополнений**.
2. Нажмите на три точки в правом верхнем углу и выберите **Репозитории**.
3. Добавьте URL репозитория: `https://github.com/umduru/umdu-k1-uboot` и подтвердите.
4. Найдите в списке и установите дополнение **Umdu SPI U‑Boot Flasher**.

## Прошивка U‑Boot в SPI

1. Запустите установленное дополнение.
2. Откройте веб‑интерфейс дополнения.
3. Нажмите кнопку **Перезаписать U‑Boot в SPI**.

::: warning Внимание
Во время выполнения операции:
- Не выключайте устройство
- Не перезагружайте систему
:::

<img class="image" src="/images/umdu-spi-uboot-flasher.png" alt="UMDU SPI U-Boot Flasher">

4. Дождитесь завершения процесса прошивки. По завершении появится сообщение: **«Перезапись U‑Boot завершена успешно!»**

<img class="image" src="/images/umdu-spi-uboot-flasher-success.png" alt="Перезапись U-Boot завершена успешно">

## Запись HAOS на USB‑диск

1. Подключите USB‑накопитель к компьютеру.
2. Откройте balenaEtcher.
3. Нажмите **Flash from file** и выберите скачанный образ.
4. Нажмите **Select target** и выберите ваш USB‑накопитель.
5. Нажмите **Flash** и дождитесь завершения записи.

## Первый запуск и восстановление

1. Подключите подготовленный USB‑диск к umdu k1. Если в устройстве была microSD, извлеките её.
2. Подайте питание и дождитесь запуска установщика Home Assistant OS.

<img class="image" src="/images/haos-loading.png" alt="Загрузка HAOS">

::: tip Примечание
Доступ к веб‑интерфейсу: [umdu.local:8123](http://umdu.local:8123)
:::
::: warning Внимание
Запуск веб‑интерфейса занимает около 5 минут. Полная установка — до 20 минут.
:::

3. В интерфейсе HAOS нажмите **Загрузка резервной копии**.

<img class="image" src="/images/haos-restore.png" alt="Восстановление из резервной копии">

4. Выберите файл резервной копии и укажите, что восстанавливать.

<img class="image" src="/images/haos-backup-select.png" alt="Выбор резервной копии">

5. Дождитесь завершения восстановления.

<img class="image" src="/images/haos-backup-restore.png" alt="Восстановление резервной копии">

::: warning Внимание
Во время восстановления не перезагружайте устройство и не отключайте питание.
:::

## Система готова

После завершения восстановления войдите в Home Assistant.

<img class="image" src="/images/haos-ready.png" alt="Система готова">
