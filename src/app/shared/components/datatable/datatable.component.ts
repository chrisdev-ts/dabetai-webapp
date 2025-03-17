import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements AfterViewInit {
  @Input() headings: string[] = [];
  @Input() data: any[] = [];
  @Output() actionEvent = new EventEmitter<{ action: string; data: any }>();

  ngAfterViewInit(): void {
    const tableElement = document.getElementById("datatable");

    if (tableElement) {
      const datatable = new DataTable(tableElement as HTMLTableElement, {
        searchable: true,
        perPageSelect: [5, 10, 15, 20, 25],
        firstLast: true,
        nextPrev: true,
        ellipsisText: "...",
        labels: {
          placeholder: "Buscar...",
          searchTitle: "Buscar dentro de la tabla",
          pageTitle: "Página {page}",
          perPage: "entradas por página",
          noRows: "No se encontraron entradas",
          info: "Mostrando {start} a {end} de {rows} entradas",
          noResults: "No hay resultados que coincidan con tu búsqueda",
        }
      });

      const dataWithActions = this.data.map((row, index) => [
        ...row,
        `
          <div class="relative inline-block text-left">
        <button id="dropdownButton-${index}" class="dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex items-center">
          <i class="fas fa-ellipsis"></i>
        </button>
        <div id="dropdownMenu-${index}" class="z-10 hidden absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li><a href="#" data-action="preview" data-index="${index}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fas fa-eye me-2"></i> Previsualizar</a></li>
            <li><a href="#" data-action="edit" data-index="${index}" data-modal-target="update" data-modal-toggle="update" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fas fa-edit me-2"></i> Editar</a></li>
            <li><a href="#" data-action="delete" data-index="${index}" class="block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fas fa-trash me-2"></i> Eliminar</a></li>
          </ul>
        </div>
          </div>
        `
      ]);

      datatable.insert({
        headings: [...this.headings, ''],
        data: dataWithActions
      });

      // Asignamos eventos dinámicos para cada dropdown
      this.setupDropdowns();
    }
  }

  setupDropdowns(): void {
    document.querySelectorAll('[id^="dropdownButton-"]').forEach(button => {
      const index = button.id.split('-')[1]; // Extraemos el índice del botón
      const menu = document.getElementById(`dropdownMenu-${index}`);

      if (menu) {
        button.addEventListener('click', (event) => {
          event.stopPropagation(); // Evita que se cierre instantáneamente
          menu.classList.toggle('hidden');
        });

        document.addEventListener('click', (event) => {
          if (!menu.contains(event.target as Node) && event.target !== button) {
            menu.classList.add('hidden');
          }
        });

        menu.querySelectorAll('a').forEach(option => {
          option.addEventListener('click', (event) => {
            event.preventDefault();
            const action = option.getAttribute('data-action');
            const rowIndex = parseInt(option.getAttribute('data-index') || '0');
            this.handleAction(action, rowIndex);
          });
        });
      }
    });
  }

  handleAction(action: string | null, index: number): void {
    if (action) {
      this.actionEvent.emit({ action, data: this.data[index] });
    }
  }
}
