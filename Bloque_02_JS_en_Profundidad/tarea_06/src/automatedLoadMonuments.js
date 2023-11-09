let monumentData = [
    { name: "Torre de Pisa", country: 'Italia', url: 'https://services.meteored.com/img/article/se-endereza-la-torre-de-pisa-recupera-4-centimetros-1672763123032_1024.jpg' },
    { name: "London Eye", country: 'Inglaterra', url: 'https://www.visitbritainshop.com/sites/default/files/styles/media_component_16_9_xxl/public/2021-06/LE%204.jpg?h=5e518458&itok=NOfK9cpi' },
    { name: "Torre Eifel", country: 'Francia', url: 'https://cdn-imgix.headout.com/mircobrands-content/image/15fa043d98f93cfb629799a920ddb1eb-Why%20Visit%20the%20Eiffel%20Tower%20at%20Night%3F.jpeg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9' },
    { name: "Coliseo", country: 'Italia', url: 'https://www.enroma.com/wp-content/uploads/elementor/thumbs/Coliseo-Romano-p9hfybrrriyw7zyeoat3i5xq91dbuq09smp8uhsmrk.jpg' },
    { name: "Estatua de la Libertad", country: 'EEUU', url: 'https://okdiario.com/img/2022/03/09/freddy-g-sw57ga_fojq-unsplash-1-1-655x368.jpg' },
];
let monumentsObject = {};


/* Carga automáticamente cinco monumentos para hacer pruebas de borrado */
let loadPreviusData = () => {
    monumentData.map((element) => {
        let key = element.name;
        monumentsObject['country'] = element.country;
        monumentsObject['url'] = element.url;
        saveData(key, monumentsObject);
    });
}

