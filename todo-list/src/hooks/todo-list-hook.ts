import * as React from "react";
import { IToDoListItemModel } from "../models/todo-list-item";
import { useCallback } from "react";

export interface ITodoListFilter {
  label?: string;
  onlyDone?: boolean;
  onlyImportant?: boolean;
  onlyActive?: boolean;
}

export const useToDoList = () => {
  const [toDoList, setTodoList] = React.useState<IToDoListItemModel[]>([]);
  const [filters, setFilters] = React.useState<ITodoListFilter>({});

  const filteredList = React.useMemo(() => {
    return toDoList.filter((item) => {
      let isValid = true;

      if (isValid && item.label) {
        isValid = item.label.toLocaleLowerCase().includes(filters.label || "");
      }

      if (isValid) {
        isValid = filters.onlyDone ? item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyActive ? !item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyImportant ? item.important : true;
      }

      return isValid;
    });
  }, [JSON.stringify(filters), toDoList]);

  const setToDoFilters = (filter: Partial<ITodoListFilter>) =>
    setFilters((prevState) => ({ ...prevState, ...filter }));
  const resetFilters = () => setFilters({});

  const updateItem = useCallback(
    (id: string, updates: Partial<Omit<IToDoListItemModel, "id">>) => {
      const updatedList = toDoList.map((item) =>
        item.id === id ? { ...item, ...updates, id: item.id } : item
      );

      setTodoList(updatedList);
    },
    [toDoList]
  );

  const addItem = useCallback(
    (model: IToDoListItemModel) => setTodoList([...toDoList, model]),
    [toDoList]
  );

  const deleteItem = useCallback(
    (id: string) => setTodoList(toDoList.filter((item) => item.id !== id)),
    [toDoList]
  );

  return {
    filteredList,
    filters,
    addItem,
    setToDoFilters,
    resetFilters,
    deleteItem,
    updateItem,
  };
};
