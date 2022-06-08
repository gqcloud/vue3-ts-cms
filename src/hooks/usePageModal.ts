import { ref } from "vue"
import PageModal from "@/components/page-modal/index"

type CallbackFn = (item?: any) => void
export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref()
  const handleNewData = () => {
    defaultInfo.value = {}
    pageModalRef.value!.dialogVisible = true
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    pageModalRef.value!.dialogVisible = true
    editCb && editCb(item)
  }
  return [handleNewData, handleEditData, defaultInfo, pageModalRef]
}
