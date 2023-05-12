const level1 = new Level (
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new EndBoss()
    ],
    [
        new Cloud(300, 200),
        new Cloud(800, 400)
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -1249),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -1249),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -1249),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -1249),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1249),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1249),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1249),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1249),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1249 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1249 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1249 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1249 * 2),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1249 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1249 * 3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1249 * 3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1249 * 3),
    ],
    [
        new BottlesToCollect(),
        new BottlesToCollect(),
        new BottlesToCollect(),
        new BottlesToCollect(),
        new BottlesToCollect(),
    ],
    [
        new CoinsToCollect(),
        new CoinsToCollect(),
        new CoinsToCollect(),
        new CoinsToCollect(),
        new CoinsToCollect(),
    ],
);


