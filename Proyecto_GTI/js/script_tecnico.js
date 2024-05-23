
    function deleteSelectedRows() {
        // Mostrar un mensaje de confirmación
        const confirmDelete = confirm("¿Estás seguro que deseas eliminar las filas seleccionadas?");
        
        if (confirmDelete) {
            const table = document.getElementById('consultaTable').getElementsByTagName('tbody')[0];
            const checkboxes = table.getElementsByClassName('delete-checkbox');
            
            for (let i = checkboxes.length - 1; i >= 0; i--) {
                if (checkboxes[i].checked) {
                    table.deleteRow(i);
                }
            }
        }
    }

    