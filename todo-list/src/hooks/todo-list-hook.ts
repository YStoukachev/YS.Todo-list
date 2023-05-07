import * as React from "react";
import { ToDoListItemModel } from "../models/todo-list-item";

export const useToDoList = () => {
  const [toDoList, updateToDoList] = React.useState<ToDoListItemModel[]>([]);
  const [toDoListProjection, updateToDoListProjection] = React.useState<
    ToDoListItemModel[]
  >([]);

  const addItemToList = (item: ToDoListItemModel) => {
    updateToDoList((list) => [...list, item]);
    updateToDoListProjection((list) => [...list, item]);
  };

  const deleteItemFromList = (item: ToDoListItemModel) => {
    updateToDoList((list) => list.filter((x) => x.id !== item.id));
    updateToDoListProjection((list) => list.filter((x) => x.id !== item.id));
  };

  const markItemAsImportant = (id: string, newValue: boolean) => {
    updateToDoList((list) => updateImportantProp(list, id, newValue));
    updateToDoListProjection((list) => updateImportantProp(list, id, newValue));
  };

  const updateImportantProp = (
    items: ToDoListItemModel[],
    id: string,
    newValue: boolean
  ) => {
    const itemIndexToUpdate = items.findIndex((x) => x.id === id);
    const updatedItem: ToDoListItemModel = {
      ...items[itemIndexToUpdate],
      important: newValue,
    };
    const updatedItems = [...items];
    updatedItems[itemIndexToUpdate] = updatedItem;

    return updatedItems;
  };

  const updateDoneProp = (
    items: ToDoListItemModel[],
    id: string,
    newValue: boolean
  ) => {
    const itemIndexToUpdate = items.findIndex((x) => x.id === id);
    const updatedItem: ToDoListItemModel = {
      ...items[itemIndexToUpdate],
      done: newValue,
    };
    const updatedItems = [...items];
    updatedItems[itemIndexToUpdate] = updatedItem;

    return updatedItems;
  };

  const markItemAsDone = (id: string, newValue: boolean) => {
    updateToDoList((list) => updateDoneProp(list, id, newValue));
    updateToDoListProjection((list) => updateDoneProp(list, id, newValue));
  };

  const searchInToDoList = (label: string) => {
    const toDoListCopy = [...toDoList];

    updateToDoListProjection(
      toDoListCopy.filter((x) => x.label.startsWith(label))
    );
  };

  const showImportantTasks = (isImportant: boolean) => {
    const toDoListCopy = [...toDoList];

    updateToDoListProjection(
      toDoListCopy.filter((x) => x.important === isImportant)
    );
  };

  const showDoneTasks = (isDone: boolean) => {
    const toDoListCopy = [...toDoList];

    updateToDoListProjection(toDoListCopy.filter((x) => x.done === isDone));
  };

  const showAllTasks = () => {
    updateToDoListProjection([...toDoList]);
  };

  return {
    toDoListProjection,
    addItemToList,
    deleteItemFromList,
    markItemAsImportant,
    markItemAsDone,
    searchInToDoList,
    showImportantTasks,
    showDoneTasks,
    showAllTasks,
  };
};
