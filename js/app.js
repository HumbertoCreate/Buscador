var mostrar = document.getElementById('resultado'),
    year = document.getElementById('year'),
    maximo = new Date().getFullYear(),
    minimo = maximo - 10,
    datosBusqueda = 
    {
        marca: '',
        year: '',
        minimo: '',
        maximo: '',
        puertas: '',
        transmision: '',
        color: '',
    },
    min = document.getElementById('minimo'),
    max = document.getElementById('maximo');

document.addEventListener('DOMContentLoaded', () =>
{
    mostrarAuto(autos);
    llenarSelect();
});

marca.addEventListener('change', e =>
{
   datosBusqueda.marca = e.target.value; 

   filtrarAuto();
});

year.addEventListener('change', e =>
{
   datosBusqueda.year = e.target.value; 

   filtrarAuto();
});

min.addEventListener('change', e =>
{
   datosBusqueda.minimo = e.target.value;

   filtrarAuto();
});

max.addEventListener('change', e =>
{
   datosBusqueda.maximo = e.target.value; 
});

puertas.addEventListener('change', e =>
{
   datosBusqueda.puertas = e.target.value; 
});

transmision.addEventListener('change', e =>
{
   datosBusqueda.transmision = e.target.value; 
});

color.addEventListener('change', e =>
{
   datosBusqueda.color = e.target.value; 
});


function mostrarAuto(autos)
{
    clear();

    autos.forEach( auto =>
    {
        const{
            marca, modelo, year, precio, puestas, color, transmision
        } = auto;
        var autoHtml = document.createElement('p');

        autoHtml.textContent = 
        `
            ${marca} ${modelo} - ${year}  - ${puestas} Puertas - Transmision: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `;

        mostrar.appendChild(autoHtml);
    });
}

function llenarSelect()
{
    for (let i = maximo; i >= minimo; i--)
    {
        var opcion = document.createElement('option');

        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
    }
}

function filtrarAuto()
{
    var resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPuertas);
    mostrarAuto(resultado);
}

function filtrarMarca(auto)
{
    var {marca} = datosBusqueda;

    if(marca)
    {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarYear(auto)
{
    var {year} = datosBusqueda;

    if(year)
    {
        return auto.year === parseInt(year);
    }

    return auto;
}

function filtrarMin(auto)
{
    var {minimo} = datosBusqueda;

    if(minimo)
    {
        if(auto.precio >= parseInt(minimo))
        {
            return auto.precio;
        }
    }

    return auto;
}

function filtrarPuertas(auto)
{
    var {puertas} = datosBusqueda;

    if(puertas)
    {
        return auto.puertas === parseInt(puertas);
    }
}

function clear()
{
    while(resultado.firstChild)
    {
        resultado.removeChild(resultado.firstChild);
    }
}