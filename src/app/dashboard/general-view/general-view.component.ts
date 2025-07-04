import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const ApexCharts: any;

@Component({
  selector: 'app-general-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-view.component.html',
})
export class GeneralViewComponent implements AfterViewInit {
  private chart: any;

  ngAfterViewInit() {
    // Esperar un poco para que el DOM se renderice completamente
    setTimeout(() => {
      this.initializeChart();
    }, 300);
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  private initializeChart() {
    // Verificar si ApexCharts está disponible
    if (typeof ApexCharts === 'undefined') {
      console.error('ApexCharts no está disponible');
      this.showErrorMessage();
      return;
    }

    const options = {
      chart: {
        height: '100%',
        width: '100%',
        type: 'line' as const,
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
        },
        offsetX: 0,
        offsetY: 0,
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: 'solid',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: 'smooth' as const,
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      series: [
        {
          name: 'Controlado (70-130)',
          data: [28, 30, 25, 32, 28, 31, 28],
          color: '#10B981', // Verde
        },
        {
          name: 'Moderado (130-180)',
          data: [15, 12, 18, 10, 15, 11, 15],
          color: '#F59E0B', // Amarillo
        },
        {
          name: 'Descontrolado (>180)',
          data: [4, 5, 4, 5, 4, 5, 4],
          color: '#EF4444', // Rojo
        },
      ],
      xaxis: {
        categories: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        labels: {
          show: true,
          style: {
            fontSize: '11px',
            fontWeight: 400,
          },
          offsetY: 0,
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
            return Math.round(value) + '';
          },
          style: {
            fontSize: '11px',
            fontWeight: 400,
          },
          offsetX: 0,
        },
        title: {
          text: 'Pacientes',
          style: {
            fontSize: '10px',
            fontWeight: 500,
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '11px',
        itemMargin: {
          horizontal: 5,
          vertical: 5,
        },
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            yaxis: {
              labels: {
                formatter: function (value: number) {
                  return Math.round(value) + '';
                },
                style: {
                  fontSize: '10px',
                  fontWeight: 400,
                },
              },
              title: {
                text: '',
              },
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '10px',
                  fontWeight: 400,
                },
              },
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    };

    // Renderizar el gráfico en el div con id "glucose-chart"
    const chartElement = document.getElementById('glucose-chart');
    if (chartElement) {
      try {
        this.chart = new ApexCharts(chartElement, options);
        this.chart.render();
        console.log('Gráfico renderizado exitosamente');
      } catch (error) {
        console.error('Error al renderizar el gráfico:', error);
        this.showErrorMessage();
      }
    } else {
      console.error('No se encontró el elemento con id "glucose-chart"');
    }
  }

  private showErrorMessage() {
    const chartElement = document.getElementById('glucose-chart');
    if (chartElement) {
      chartElement.innerHTML = `
        <div class="w-full h-full flex items-center justify-center bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
          <div class="text-center">
            <i class="fas fa-exclamation-triangle text-red-500 text-2xl mb-2"></i>
            <p class="text-red-700 dark:text-red-300 text-sm">Error al cargar el gráfico</p>
          </div>
        </div>
      `;
    }
  }
}
