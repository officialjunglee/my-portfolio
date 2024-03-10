// 
import resume from '/src/assets/Atishay_Resume_OM.pdf'

const ResumeDownload = () => {
    const handleDownload = () => {

        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Atishay_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>
            My Resume
        </button>
    );
};

export default ResumeDownload;
