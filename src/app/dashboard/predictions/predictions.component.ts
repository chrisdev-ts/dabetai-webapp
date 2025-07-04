import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const ApexCharts: any;

@Component({
  selector: 'app-predictions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './predictions.component.html',
})
export class PredictionsComponent implements AfterViewInit {
  private distributionChart: any;
  private trendChart: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeCharts();
    }, 300);
  }

  private initializeCharts() {
    this.initializeDistributionChart();
    this.initializeTrendChart();
  }

  private initializeDistributionChart() {
    if (typeof ApexCharts === 'undefined') {
      console.error(
        'ApexCharts no está disponible para gráfico de distribución'
      );
      return;
    }

    const options = {
      chart: {
        height: '100%',
        width: '100%',
        type: 'donut' as const,
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
        },
      },
      series: [45, 30, 25], // Porcentajes de cada complicación
      labels: ['Retinopatía', 'Neuropatía', 'Nefropatía'],
      colors: ['#EF4444', '#F59E0B', '#8B5CF6'],
      tooltip: {
        enabled: true,
        y: {
          formatter: function (value: number) {
            return value + '%';
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return Math.round(val) + '%';
        },
        style: {
          fontSize: '11px',
          fontWeight: 500,
        },
      },
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '12px',
        itemMargin: {
          horizontal: 8,
          vertical: 8,
        },
        markers: {
          width: 8,
          height: 8,
        },
        offsetY: 10,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                fontSize: '14px',
                fontWeight: 600,
                formatter: function () {
                  return '100%';
                },
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            legend: {
              fontSize: '11px',
              itemMargin: {
                horizontal: 5,
                vertical: 5,
              },
            },
            dataLabels: {
              style: {
                fontSize: '10px',
              },
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '55%',
                },
              },
            },
          },
        },
        {
          breakpoint: 640,
          options: {
            legend: {
              fontSize: '10px',
              itemMargin: {
                horizontal: 3,
                vertical: 3,
              },
            },
            dataLabels: {
              style: {
                fontSize: '9px',
              },
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '50%',
                },
              },
            },
          },
        },
      ],
    };

    const chartElement = document.getElementById('distribution-chart');
    if (chartElement) {
      try {
        this.distributionChart = new ApexCharts(chartElement, options);
        this.distributionChart.render();
      } catch (error) {
        console.error('Error al renderizar el gráfico de distribución:', error);
      }
    }
  }

  private initializeTrendChart() {
    if (typeof ApexCharts === 'undefined') {
      console.error('ApexCharts no está disponible para gráfico de tendencia');
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
          left: 15,
          right: 15,
          top: 15,
          bottom: 20,
        },
      },
      series: [
        {
          name: 'Predicciones Realizadas',
          data: [12, 15, 18, 22, 28, 25, 30],
          color: '#3B82F6',
        },
        {
          name: 'Predicciones de Alto Riesgo',
          data: [4, 6, 7, 9, 11, 8, 12],
          color: '#EF4444',
        },
      ],
      xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
        labels: {
          show: true,
          style: {
            fontSize: '11px',
            fontWeight: 400,
          },
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
        },
        title: {
          text: 'Cantidad',
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
          horizontal: 8,
          vertical: 8,
        },
        markers: {
          width: 8,
          height: 8,
        },
        offsetY: 10,
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            yaxis: {
              labels: {
                style: {
                  fontSize: '10px',
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
                },
              },
            },
            legend: {
              fontSize: '10px',
              itemMargin: {
                horizontal: 5,
                vertical: 5,
              },
            },
          },
        },
        {
          breakpoint: 640,
          options: {
            yaxis: {
              labels: {
                style: {
                  fontSize: '9px',
                },
              },
              title: {
                text: '',
              },
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '9px',
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

    const chartElement = document.getElementById('trend-chart');
    if (chartElement) {
      try {
        this.trendChart = new ApexCharts(chartElement, options);
        this.trendChart.render();
      } catch (error) {
        console.error('Error al renderizar el gráfico de tendencia:', error);
      }
    }
  }
}
