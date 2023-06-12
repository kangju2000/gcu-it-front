import { Modal } from 'antd';
import IndicatorForm from '@/components/domains/IndicatorForm';
import stockData from '@/db/stocks.json';

interface IndicatorModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  onFinish: (values: any) => void;
}

export default function IndicatorModal({ isModalOpen, onClose, onFinish }: IndicatorModalProps) {
  return (
    <Modal
      title="지표 값 입력"
      open={isModalOpen}
      onCancel={onClose}
      footer={null}
      className="w-full"
    >
      <IndicatorForm onFinish={onFinish} stocks={stockData.data.stocks} />
    </Modal>
  );
}
