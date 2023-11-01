import {
    Button,
    FormControl,
    FormLabel,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    TabPanel,
    Tab,
    TabList,
    TabIndicator,
    Tabs,
    TabPanels,
  } from '@chakra-ui/react'
import { useState } from 'react'

function DateModal({isOpen, onClose, formik, overlay}){
    
    // Local state untuk menyimpan value pada date dan time
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    //handle untuk date time
    const handleSimpanDateTime = () => {
        const dateStr = `${startDate} - ${endDate}`;
        const timeStr = `${startTime} - ${endTime}`;
        onClose(dateStr, timeStr)
    }

    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        {overlay}
        <form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Tanggal & Waktu</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                  <Tab>Tanggal Event</Tab>
                  <Tab>Waktu Event</Tab>
                </TabList>
                <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="blue.500"
                  borderRadius="1px"
                />
                <TabPanels>
                  <TabPanel>
                    <FormControl>
                    <FormLabel>Tanggal Mulai</FormLabel>
                      <Input value={formik.values.tanggalMulai}  onChange={(e) => {formik.setFieldValue("tanggalMulai", e.target.value); setStartDate(e.target.value)}} placeholder="Select Date and Time" size="md" type="date"/>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Tanggal Berakhir</FormLabel>
                        <Input value={formik.values.tanggalBerakhir} onChange={(e) => {formik.setFieldValue("tanggalBerakhir", e.target.value); setEndDate(e.target.value)}} placeholder="Select Date and Time" size="md" type="date"/>
                    </FormControl>
                  </TabPanel>
                  <TabPanel>
                    <FormControl>
                      <FormLabel>Waktu Mulai</FormLabel>
                        <Input value={formik.values.waktuMulai} onChange={(e) => {formik.setFieldValue("waktuMulai", e.target.value); setStartTime(e.target.value)}} placeholder="Select Date and Time" size="md" type="time"/>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Waktu Berakhir</FormLabel>
                          <Input value={formik.values.waktuBerakhir} onChange={(e) =>{formik.setFieldValue("waktuBerakhir", e.target.value); setEndTime(e.target.value)}} placeholder="Select Date and Time" size="md" type="time"/>
                      </FormControl>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button type='submit' onClick={handleSimpanDateTime} w={'100%'} bgColor={'rgb(16, 69, 181)'} color={'white'} 
              _hover={{
                background: 'rgb(22, 97, 255)',
                color: "white",
              }}>
                Simpan
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    )
}

export default DateModal;