import { ref } from "vue"
import PageModal from "@/components/page-modal/index"
export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref()
  const handleNewData = () => {
    pageModalRef.value!.dialogVisible = true
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    pageModalRef.value!.dialogVisible = true
  }
  return [handleNewData, handleEditData, defaultInfo, pageModalRef]
}
