import { AfterViewInit, Component } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
})
export class GeneralViewComponent implements AfterViewInit {
  ngAfterViewInit() {
    const options = {
      chart: {
        height: "100%",
        width: "100%",
        type: "line", // Tipo de gráfico más adecuado para glucosa
        fontFamily: "Poppins, sans-serif",
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: 'smooth', // Suaviza la línea
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "Glucosa (mg/dL)",
          data: [90, 110, 150, 130, 180, 170, 140], // Datos de glucosa simulados
          color: "#FF5733", // Rojo indica niveles altos
        },
      ],
      xaxis: {
        categories: [
          "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
        ],
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value + " mg/dL";
          },
        },
      },
    };

    // Renderizar el gráfico en el div con id "glucose-chart"
    const chartElement = document.getElementById("glucose-chart");
    if (chartElement) {
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  }
}
